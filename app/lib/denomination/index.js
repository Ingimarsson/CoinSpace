'use strict';

var symbols = {
  bitcoin: 'BTC',
  testnet: 'BTC',
  bitcoincash: 'BCH',
  litecoin: 'LTC',
  ethereum: 'ETH',
  smileycoin: 'SMLY'
}

function getDenomination(token) {
  if (typeof token === 'string') return symbols[token];
  return token.symbol;
}

module.exports = getDenomination;
