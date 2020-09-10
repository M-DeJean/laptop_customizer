import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import './App.css';
import MainForm from './Components/MainForm'
import Features from './Components/Features'
import Summary from './Components/Summary'
import Total from './Components/Total'
// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const { features } = this.props;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            selected={this.state.selected}
            state={this.state}
            updateFeature={this.updateFeature}
          />
          {/* <form className="main__form">
            <h2>Customize your laptop</h2>
            {Object.keys(this.state.selected).map((feature, idx) => (
              <Features
                features={features}
                featureHash={feature + '-' + idx}
                feature={feature}
                key={idx}
                state={this.state}
                updateFeature={this.updateFeature}
                USCurrencyFormat={USCurrencyFormat}
              />
            ))}
          </form> */}
          <section className="main__summary">
            <h2>Your cart</h2>
              {Object.keys(this.state.selected).map((feature, idx) =>(
               <Summary
                featureHash={feature + '-' + idx}
                selectedOption={this.state.selected[feature]}
                key={feature + '_' + idx}
                feature={feature}
                USCurrencyFormat={USCurrencyFormat}
                /> 
              ))}
            <div className="summary__total">
                <Total
                  USCurrencyFormat={USCurrencyFormat}
                  selected={this.state.selected}
                 />
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
