require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    }
  }
};