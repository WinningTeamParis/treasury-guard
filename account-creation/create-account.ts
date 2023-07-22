import { ethers } from 'ethers'
import { EthersAdapter } from '@safe-global/protocol-kit'
import { SafeFactory } from '@safe-global/protocol-kit'
import { SafeAccountConfig } from '@safe-global/protocol-kit'
import Safe from '@safe-global/protocol-kit'
import { SafeTransactionDataPartial, OperationType } from '@safe-global/safe-core-sdk-types'
import protocolDeployments from "@safe-global/safe-core-protocol"

import SafeApiKit from '@safe-global/api-kit'

// https://chainlist.org/?search=goerli&testnets=true
const RPC_URL='https://eth-goerli.public.blastapi.io'

class LoggingProvider extends ethers.providers.JsonRpcProvider {
  async send(method: string, params: any): Promise<any> {
      console.log('Method:', method);
      console.log('Params:', params);
      return super.send(method, params);
  }
}

const provider = new LoggingProvider(RPC_URL);

// Initialize signers
const owner1Signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)

const ethAdapterOwner1 = new EthersAdapter({
  ethers,
  signerOrProvider: owner1Signer
})

const safeApiKit = new SafeApiKit({
    txServiceUrl: 'https://safe-transaction-goerli.safe.global/',
    ethAdapter: ethAdapterOwner1
})

async function create_account() {
    const safeFactory = await SafeFactory.create({ ethAdapter: ethAdapterOwner1 });

    const safeAccountConfig: SafeAccountConfig = {
        owners: [
          await owner1Signer.getAddress()
        ],
        threshold: 1,
        // ... (Optional params)
      }
    const safeSdkOwner1 = await safeFactory.deploySafe({ safeAccountConfig })

    const safeAddress = await safeSdkOwner1.getAddress()
      
    console.log('Your Safe has been deployed:')
    console.log(`https://goerli.etherscan.io/address/${safeAddress}`)
    console.log(`https://app.safe.global/gor:${safeAddress}`)
}

async function deposit() {

    const safeAmount = ethers.utils.parseUnits('0.05', 'ether').toHexString()

    const transactionParameters = {
        to: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f",
        value: safeAmount   
    }

    const tx = await owner1Signer.sendTransaction(transactionParameters)

    console.log('Fundraising.')
    console.log(`Deposit Transaction: https://goerli.etherscan.io/tx/${tx.hash}`)
}

async function send_transaction() {
    // Create Safe instance
    const safe = await Safe.create({
        ethAdapter: ethAdapterOwner1,
        safeAddress: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f"
    })
  
  // Create transaction
  const safeTransactionData: SafeTransactionDataPartial = {
    to: '0x25238221BE3C80b7dDCD22CCB2Ff32cff32ecF91',
    value: '1', // 1 wei
    data: '0x',
    operation: OperationType.Call
  }
  
  const safeTransaction = await safe.createTransaction({ safeTransactionData })
  
  const senderAddress = await owner1Signer.getAddress()
  const safeTxHash = await safe.getTransactionHash(safeTransaction)
  const signature = await safe.signTransactionHash(safeTxHash)
  
  // Propose transaction to the service
  await safeApiKit.proposeTransaction({
    safeAddress: await safe.getAddress(),
    safeTransactionData: safeTransaction.data,
    safeTxHash,
    senderAddress,
    senderSignature: signature.data
  })
}

async function enable_module() {
    const safeSdk = await Safe.create({ ethAdapter: ethAdapterOwner1, safeAddress: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f" })
    const safeTransaction = await safeSdk.createEnableModuleTx("0x4026BA244d773F17FFA2d3173dAFe3fdF94216b9");
    const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
    const senderSignature = await safeSdk.signTransactionHash(safeTxHash)

    await safeApiKit.proposeTransaction({
        safeAddress: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f",
        safeTransactionData: safeTransaction.data,
        safeTxHash,
        senderAddress: await owner1Signer.getAddress(),
        senderSignature: senderSignature.data,
    })
    await safeApiKit.confirmTransaction(safeTxHash, senderSignature.data);

    const executeTxResponse = await safeSdk.executeTransaction(safeTransaction)
    const receipt = await executeTxResponse.transactionResponse?.wait()

    console.log('Transaction executed:')
    if (receipt) {
        console.log(`https://goerli.etherscan.io/tx/${receipt.transactionHash}`)
    }
}

async function send_test_transaction() {
    const safeSdk = await Safe.create({ ethAdapter: ethAdapterOwner1, safeAddress: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f" })

    // Any address can be used. In this example you will use vitalik.eth
    const destination = '0x25238221BE3C80b7dDCD22CCB2Ff32cff32ecF91'
    const amount = ethers.utils.parseUnits('0.001', 'ether').toString()
    
    const safeTransactionData: SafeTransactionDataPartial = {
      to: destination,
      data: '0x',
      value: amount
    }
    // Create a Safe transaction with the provided parameters
    const safeTransaction = await safeSdk.createTransaction({ safeTransactionData })
    const safeTxHash = await safeSdk.getTransactionHash(safeTransaction);
    const senderSignature = await safeSdk.signTransactionHash(safeTxHash)

    await safeApiKit.proposeTransaction({
        safeAddress: "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f",
        safeTransactionData: safeTransaction.data,
        safeTxHash,
        senderAddress: await owner1Signer.getAddress(),
        senderSignature: senderSignature.data,
    })
    await safeApiKit.confirmTransaction(safeTxHash, senderSignature.data);

    const executeTxResponse = await safeSdk.executeTransaction(safeTransaction)
    const receipt = await executeTxResponse.transactionResponse?.wait()

    console.log('Transaction executed:')
    if (receipt) {
        console.log(`https://goerli.etherscan.io/tx/${receipt.transactionHash}`)
    }
}
// attach plugin to test protocol manager

// plugin: 0x6fe0dd0604E8615E494C08291375c570ab062E07
// protocol manager: 0x4026BA244d773F17FFA2d3173dAFe3fdF94216b9
// registry: 0x9EFbBcAD12034BC310581B9837D545A951761F5A


async function transaction_from_plugin() {
    const pluginAddress = "0x719954B1689BD0AfdeC6E07A6e605d60938f79D3";
    const SAMPLE_PLUGIN_ABI = [
      "function executeFromPlugin(address manager, address safe, bytes calldata data) external"
    ]

    const getTestPlugin = async() => {
      return new ethers.Contract(
          pluginAddress,
          SAMPLE_PLUGIN_ABI,
          owner1Signer
      )
    }

    const plugin = await getTestPlugin();

    const safeProtocolInfo = protocolDeployments[5][0].contracts.TestSafeProtocolManager;
    
    const registryInfo = protocolDeployments[5][0].contracts.TestSafeProtocolRegistryUnrestricted;

    const registry = new ethers.Contract(
      registryInfo.address,
      registryInfo.abi
    );

    const manager = new ethers.Contract(
      safeProtocolInfo.address,
      safeProtocolInfo.abi,
      provider
    );

    const amount = ethers.utils.parseUnits('0.001', 'ether').toString()
    const safeTransactionData = ethers.utils.defaultAbiCoder.encode(
      ['address', 'bytes', 'uint256'],
      [ "0x25238221BE3C80b7dDCD22CCB2Ff32cff32ecF91", '0x', amount]
    );
    
    console.log(manager.address);
    console.log(safeTransactionData);
    await plugin.executeFromPlugin(manager.address, "0x19D3fF6711b60eB1a4AA4126D7d3d305b72C465f", safeTransactionData);
}

transaction_from_plugin();