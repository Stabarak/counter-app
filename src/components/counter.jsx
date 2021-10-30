import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </>
    );
  }

  handleIncrement = (count) => {
    console.log(this);
    this.setState({ count: this.state.count + count });
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  };

  getBadgeClasses = () => {
    let classes = 'badge p-1 m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
