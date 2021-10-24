const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const { infuraProjectId, mnemonic } = require('./.secrets.json');

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraProjectId}`),
      network_id: 4, 
      gas: 5500000, 
      confirmations: 2,    
      timeoutBlocks: 200,  
      skipDryRun: false  
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraProjectId}`),
      network_id: 1, 
      gas: 5000000,       
      confirmations: 2,  
      gasPrice: 5e9,
      timeoutBlocks: 200,  
      skipDryRun: false   
    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.9",
    }
  }
};
