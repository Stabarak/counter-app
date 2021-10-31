import React, { Component } from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className='navbar navbar-light bg-light'>
          <div className='container-fluid'>
            <span className='navbar-brand mb-0 h1'>
              Navbar
              <span className='badge ml-2 badge-pill badge-secondary'>
                {this.props.totalCounters}
              </span>
            </span>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
