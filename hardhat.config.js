require("@nomiclabs/hardhat-ethers");

const SEPOLIA_API_KEY = vars.get("SEPOLIA_API_KEY");
const accounts = vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_API_KEY}`,
      accounts
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${SEPOLIA_API_KEY}`,
      accounts
    }
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}