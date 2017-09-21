// TODO: 
// GET http://api.fixer.io/latest?base=${fromCurrency} - data => Object.keys(data.rates)
// rate = data.rates.toCurrency

// import axios from 'axios';
const axios = require('axios');

function fetchRates(fromCurrency = 'USD') {
  return (
    axios.get(`http://api.fixer.io/latest?base=${fromCurrency}`)
  );
}

export default fetchRates

// console.log(fetchRates().then((response) => console.log(response)))