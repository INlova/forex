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

  setCurrencies = () => {
    fetchRates().then((response) => {
      console.log(response, 'res')
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
    console.log('currencies', this.state.currencies)
    return (
      <div>
        <CurrencySelector currencies={this.state.currencies}/>
        <ConversionDisplay rate={this.state.rate}/>
        <CurrencySelector currencies={this.state.currencies}/>
      </div>
    )
  }
}