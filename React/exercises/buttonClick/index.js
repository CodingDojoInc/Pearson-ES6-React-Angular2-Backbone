var myButton = React.createElement(
  'button',
  // PROPS ******************
  {
    // Adding style
    style: { fontFamily: 'sans-serif' },
    // Adding click handler
    onClick: function(){
      alert("You clicked me!");
    }
  },
  // ************************
  'Click Me!'
);

ReactDOM.render(myButton, document.getElementById('root'));
