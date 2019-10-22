import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }

  incrementNumber = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decreaseNumber = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }


  render() {
    return (
      <div id='component-app'>
        <h1 id="display-counter">The counter is currently {this.state.counter}.</h1>
        <button 
          onClick={this.incrementNumber}
          id="increment-button">Increment
        </button>
        <button 
          onClick={this.decreaseNumber}
          id="decrement-button">Decrement
        </button>
      </div>
    );
  }
}

export default App;
