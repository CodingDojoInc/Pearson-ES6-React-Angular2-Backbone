import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NavBar extends Component { // Note that we're now importing Component
  render(){
    // Render has access to this.props. Iterate through this.props.links and generate a list of <li>'s
    const linkList = this.props.links.map( (link, idx) => {
      // The key prop/attribute is needed to
      return <li key={idx} ><a href={link.url}>{link.title}</a></li>
    });
    return (
      <nav>
        <ul>
          { linkList }
        </ul>
      </nav>
    )
  }
}

const links = [
  { url: '/home', title: 'Home' },
  { url: '/about', title: 'About' }
];

ReactDOM.render(<NavBar links={links} />, document.getElementById('root'));
