require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: process.env.LINEA_URL || "https://rpc.linea.build",
        enabled: true,
      },
      chains: {
        59144: {
          hardforkHistory: {
            shanghai: 1,
          },
        },
      },
    },
    linea: {
      // 59144 (0xe708)
      url: process.env.LINEA_URL || "https://rpc.linea.build",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
