import React from 'react';
import { Navbar } from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <>
      <Navbar>
        <Navbar.Brand href='#home'>
          <i class='fas fa-virus text-danger'></i> Covid-19 API
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;
