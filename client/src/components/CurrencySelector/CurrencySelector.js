import React from 'react';


export default class CurrencySelector extends React.Component {

  handleCurrencyClick = (event) => {
    this.props.handleCurrencyClick(event.target.value, this.props.selector);
  }

  render() {
    return (
      <select className="ui dropdown" onChange={this.handleCurrencyClick}>
        {
          this.props.currencies.map(currency => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))
      }
      </select>
    );
  }
}