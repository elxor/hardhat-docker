import "dotenv/config";
import { HardhatUserConfig } from "hardhat/types";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "@typechain/hardhat";
import "hardhat-abi-exporter";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "./tasks";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    solidity: {
        compilers: [
            {
                version: "0.8.4",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    paths: {
        tests: "./tests",
        artifacts: "./build/artifacts",
        cache: "./build/cache",
        deployments: "./build/deployments",
    },
    typechain: {
        outDir: "./build/typechain",
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
    },
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        hardhat: {
            // accounts: {
            //     mnemonic: process.env.MNEMONIC,
            // },
            chainId: 1337,
        },
        ropsten: {
            url: process.env.ROPSTEN_URL,
            accounts: {
                mnemonic: process.env.MNEMONIC,
            }
        },
    },
    namedAccounts: {
        deployer: 0,
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    abiExporter: {
        path: "./build/abis",
        runOnCompile: true,
        clear: true,
        flat: true,
        only: [],
        spacing: 2,
        pretty: false,
    },
};

export default config;
