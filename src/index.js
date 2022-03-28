import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const scalerType = 
[
  {
    label: "Odległość",
    value: 0
  },
  {
    label: "Waga",
    value: 1
  },
  {
    label: "Waluty",
    value: 2
  }
];

const scalers = 
[
  [
    {
      label: "Milimetry",
      value: 0
    },
    {
      label: "Centymetry",
      value: 1
    },
    {
      label: "Decymetry",
      value: 2
    },
    {
      label: "Metry",
      value: 3
    },
    {
      label: "Kilometry",
      value: 4
    }
  ],
  [
    {
      label: "Miligramy",
      value: 0
    },
    {
      label: "Gramy",
      value: 1
    },
    {
      label: "Dekagram",
      value: 2
    },
    {
      label: "Kilogram",
      value: 3
    },
    {
      label: "Tona",
      value: 4
    }
  ],
  [
    {
      label: "Złoty",
      value: 0
    },
    {
      label: "Euro",
      value: 1
    },
    {
      label: "Dolar Amerykański",
      value: 2
    }
  ]
];

const multipliers = 
[
  [
    {
      name: "mm",
      value: 0.001
    },
    {
      name: "cm",
      value: 0.01
    },
    {
      name: "dm",
      value: 0.1
    },
    {
      name: "m",
      value: 1
    },
    {
      name: "km",
      value: 1000
    }
  ],
  [
    {
      name: "gramy na kilogramy",
      value: 0.001
    },
    {
      name: "kilogramy na gramy",
      value: 1000
    }
  ]
]

class Calculator extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {scaler: 0, from: 0, to: 0, inputValue: 1, convertedValue: 0};

    this.handleChangeFrom = this.handleChangeFrom.bind(this);
    this.handleChangeTo = this.handleChangeTo.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeScalers = this.handleChangeScalers.bind(this);
  }

  handleChangeFrom(event) 
  {
    this.setState({from: event.target.value});
  }

  handleChangeTo(event) 
  {
    this.setState({to: event.target.value});
  }

  handleChangeScalers(event) 
  {
    this.setState({from: 0});
    this.setState({to: 0});
    this.setState({scaler: event.target.value});
  }

  handleChangeInput(event) 
  {
    this.setState({inputValue: event.target.value});


    let temp = this.state.inputValue / multipliers[this.state.scaler][this.state.from].value * ((multipliers[this.state.scaler][this.state.from].value / multipliers[this.state.scaler][this.state.to].value));
    this.setState({convertedValue: temp});
  }

  render()
  {
    return(
      <div className='calc'>
        <select value={this.state.value} onChange={this.handleChangeScalers} className="scalerType">
          {scalerType.map((scalerType) => (
            <option value={scalerType.value}>{scalerType.label}</option>
          ))}
        </select><br />
        <br />

        <input type="number" value={this.state.inputValue} onChange={this.handleChangeInput} />

        <select value={this.state.value} onChange={this.handleChangeFrom}>
          {scalers[this.state.scaler].map((scalers) => (
            <option value={scalers.value}>{scalers.label}</option>
          ))}
        </select>
        
        <button onClick={this.handleChangeInput}>dsdsdsdsd</button>
        
        <h2>{this.state.convertedValue}</h2>
        <select value={this.state.value} onChange={this.handleChangeTo}>
          {scalers[this.state.scaler].map((scalers) => (
            <option value={scalers.value}>{scalers.label}</option>
          ))}
        </select>
      </div>
    )
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
