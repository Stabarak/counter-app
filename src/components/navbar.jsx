import React, { Component } from 'react';

const Navbar = (props) => {
  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <span className='navbar-brand mb-0 h1'>
            Navbar
            <span className='badge ml-2 badge-pill badge-secondary'>
              {props.totalCounters}
            </span>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
