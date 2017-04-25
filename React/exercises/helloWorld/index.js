// See index.html for dependencies
var someStyle = {
  fontFamily: 'sans-serif'
}

var myHeadline = React.createElement('h1', { style: someStyle }, 'Hello World!');

// Creates something like the following object:

/*
{
  type: "h1",
  props: {
    children: "Hello World!",
    style: {
      fontFamily: "sans-serif"
    }
  }
}
*/

// Which describes what we'd like ReactDOM.render() to place in the actual DOM

ReactDOM.render(myHeadline, document.getElementById('root'));
