import React from 'react';


export default class CurrencySelector extends React.Component {
  render() {
    return (
      <select className="ui dropdown">
        {
        this.props.currencies.map((currency, idx) =>
          <option value="" key={idx} onClick={this.props.handleCurrencyClick}>{currency}</option>
        )
      }
      </select>
    )
  }
}