import { Core } from "@walletconnect/core"
import { Web3Wallet } from "@walletconnect/web3wallet"
export let web3wallet
export let core

export async function createWeb3Wallet() {
    core = new Core({
        logger: "debug",
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    })

    web3wallet = await Web3Wallet.init({
        core,
        metadata: {
            name: "React Web3Wallet",
            description: "React Web3Wallet for WalletConnect",
            url: "https://walletconnect.com/",
            icons: ["https://avatars.githubusercontent.com/u/37784886"]
        }
    })
}

export async function pair(params) {
    return await core.pairing.pair({ uri: params.uri })
}
