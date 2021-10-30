import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    value: this.props.value,
  };

  render() {
    return (
      <div className='ml-3 mb-3'>
        <span> Counter #{this.props.id}</span>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }

  handleIncrement = (value) => {
    this.setState({ value: this.state.value + value });
  };

  formatCount = () => {
    const { value: value } = this.state;
    return value === 0 ? 'Zero' : value;
  };

  getBadgeClasses = () => {
    let classes = 'badge p-1 m-2 badge-';
    classes += this.state.value === 0 ? 'warning' : 'primary';
    return classes;
  };
}

export default Counter;
