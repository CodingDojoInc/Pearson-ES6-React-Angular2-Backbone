import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  render(){
    return (
      <h1>Component generated with <code>ES6 classes</code></h1>
    )
  }
}

/*
Using React.createClass()
************************
const MyComponent = React.createClass({
  render() {
    return (
      <h1>Component generated with <code>createClass</code></h1>
    )
  }
});
************************
*/

ReactDOM.render(<MyComponent />, document.getElementById('root'));
