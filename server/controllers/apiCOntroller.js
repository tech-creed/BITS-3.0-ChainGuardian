const  axios = require('axios')
var WAValidator = require('multicoin-address-validator');
const fs = require('fs')


const accValidator = async (req, res) => {
    const address = req.params.address
  
    if (!address) {
      return res.status(400).json({ error: 'Missing parameters' })
    }
    blockChains = ['0x','Aave Coin','Algorand','Bitcoin','Binance','Chainlink','CUSD','Dash','DogeCoin','Ethereum','LiteCoin','Matic','Neo','Polymath','Ripple','Solana','Stellar','Tether','TrueUSD','Uniswap Coin','ZenCash']
    chainVerified = null
    blockKeyword = {'Bitcoin':'bitcoin','DogeCoin':'dogecoin','Binance':'bnb','Ethereum':'ethereum','Ripple':'ripple','Stellar':'stellar','Dash':'dash','LiteCoin':'litecoin','Cardano':'cardano'}
  
    for (let j = 0; j < blockChains.length; j++) {
      var valid = WAValidator.validate(address, blockChains[j]);
      if(valid){
        chainVerified = blockKeyword[blockChains[j]]
        break;
      }
      else{
        continue 
      }
    }
    finalBlockchain = {'chain':chainVerified}
    res.json(finalBlockchain)    
  }
  
  
  module.exports = { accValidator}