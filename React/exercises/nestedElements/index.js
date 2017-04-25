var divWithList = React.createElement(
  // At the div level
  'div',
  null,
  // Now passing in a h1 element as a child
  React.createElement( 'h1', null, 'List of todos' ),
  // Now passing in a ul element as child
  React.createElement(
    // At the ul level
    'ul',
    { style: { listStyleType: 'none' } },
    // Now passing in li elements as children
    React.createElement( 'li', null, 'Learn React'),
    React.createElement('li', null, 'Climb Mt. Everest')
  )
);

ReactDOM.render(divWithList, document.getElementById('root'));
