require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

const PRIVATE_KEY = process.env.PK || "0x"

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
    defaultNetwork: "goerli",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            url: "https://eth-goerli.g.alchemy.com/v2/demo",
            chainId: 5,
            accounts: ["decbf305301651dbd462c60c32e8fc09d2c8c145b1cb5274489d7f462edb051a"],
            blockConfirmations: 1,
        },
    },
    solidity: "0.8.18",
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};
