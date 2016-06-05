'use strict';

import React from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap';
require('styles//NavBar.css');

class NavBarComponent extends React.Component {
  render() {
    return (
      <div className="navbar-component">
        const navInstance = (
        <Nav bsStyle="pills" activeKey={1} onSelect={handleSelect}>
          <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
          <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
          <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
        </Nav>
        );

      </div>
    );
  }
}

NavBarComponent.displayName = 'NavBarComponent';

// Uncomment properties you need
// NavBarComponent.propTypes = {};
// NavBarComponent.defaultProps = {};

export default NavBarComponent;
