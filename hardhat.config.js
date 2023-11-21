require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.21",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000000,
          },
        },
      },
    ],
  },
  networks: {
    // goerli: {
    //   url: process.env.URL,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    mainnet: {
      url: process.env.URL_MAIN,
      accounts: [process.env.PRIVATE_KEY_MAIN],
      chainId: 1,
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
