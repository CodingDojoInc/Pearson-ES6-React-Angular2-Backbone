import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  // Let's use the built-in constructor function to set up an initial state
  constructor(props){
    super(props); // calls the parent constructor
    this.state = {
      counter: 0
    }
  }
  render(){
    return (
      <div style={ {textAlign: 'center'} }>
        <h1> {this.state.counter} </h1>
        <button
          onClick={ () => { this.setState({ counter: this.state.counter + 1 });}}
        >
        Increment
        </button>
        <button
          onClick={ () => { this.setState({ counter: this.state.counter - 1 });}}
        >
        Decrement
        </button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
