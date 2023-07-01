require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
    },
    fantomTest: {
      url: 'https://rpc.testnet.fantom.network',
      accounts: [process.env.MNENOMIC],

    },

    fantomMain: {
      url: 'https://rpc3.fantom.network',
      accounts: [process.env.MNENOMIC],

    },
  },

  etherscan: {           
    apiKey: process.env.SCAN,
  }

};
