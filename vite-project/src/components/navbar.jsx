import React from 'react';
import logo from '/src/assets/ironhack-logo-xs.png';
import menuicon from '/src/assets/menu-top-xs.png';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img src={logo} alt="Ironhack's logo"/>
        <img src={menuicon} alt="Menu icon"/>
      </nav>
    );
  }
}

export default Navbar;
