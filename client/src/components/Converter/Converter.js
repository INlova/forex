import React from 'react';
import CurrencySelector from '../CurrencySelector/CurrencySelector';
import ConversionDisplay from '../ConversionDisplay/ConversionDisplay';

import fetchRates from '../../api/api';

export default class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: [], error: '', rate: '',
    }
  }

  componentDidMount = () => {
    this.setCurrencies();
  }

  handleCurrencyClick = (selectedCurrency, selectorType) => {
    console.log('selectedCurrency', selectedCurrency, selectorType)
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
        <ConversionDisplay rate={this.state.rate} />
        <CurrencySelector currencies={this.state.currencies} handleCurrencyClick={this.handleCurrencyClick} selector={'to'} />
      </div>;
  }
}