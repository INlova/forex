import React from 'react';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';

import fetchRates from '../../api/api';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [], error: '', rate: '', from: 'AUD', to: 'AUD' 
    }
  }

  componentDidMount = () => {
    this.setCurrencies();
  }

  handleCurrencyClick = (selectedCurrency, selectorType) => {
    let currencyMap = { }
    if (selectorType === 'from') {
      currencyMap['from'] = selectedCurrency;
      this.setState({
        from: selectedCurrency
      })
    } if (selectorType === 'to') {
      currencyMap['to'] = selectedCurrency;
      this.setState({
        to: selectedCurrency
      })
    } if (selectorType !== 'from') {
      currencyMap['from'] = this.state.from
    } if (selectorType !== 'to') {
      currencyMap['to'] = this.state.to
    } if (currencyMap.to === currencyMap.from) {
      currencyMap['rate'] = 1
    }
    console.log('map', currencyMap)

    if (currencyMap.rate !== 1) {
      fetchRates(currencyMap.from).then(response => {
        let toCurrency = currencyMap.to;
        let rate = `${response.data.rates[toCurrency]}`;
        console.log(response.data);
        this.setState({ rate });
      });
    } else {
      this.setState({ rate: 1})
    }
    
  }

  getConversion = () => {
    const currencyMap = this.handleCurrencyClick();
    fetchRates(currencyMap.from).then((response) => {
      const toCurrency = currencyMap.to;
      console.log('from curre', currencyMap.from)
      console.log('toCurrency', toCurrency)
      console.log('res', response)
      const rate = `${response.data.rates.toCurrency}`;
      this.setState({
        rate,
      });
    })
  }

  setCurrencies = () => {
    fetchRates().then((response) => {
      this.setState({
        currencies: Object.keys(response.data.rates)
      })
    }).catch(error => {
      this.setState({
        error: `Error fetching currencies ${error}`
      })
    })
  }

  render() {
    return <div>
        <CurrencySelector currencies={this.state.currencies} handleCurrencyClick={this.handleCurrencyClick} selector={'from'} />
        <ConversionDisplay rate={this.state.rate === '' ? '1.00' : this.state.rate} />
        <CurrencySelector currencies={this.state.currencies} handleCurrencyClick={this.handleCurrencyClick} selector={'to'} />
      </div>;
  }
}