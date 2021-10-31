import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 4 },
      { id: 6, value: 0 },
    ],
  };

  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
    //   this.state.counters.map((counter) => {
    //   console.log(counterID);
    //   if (counter.id === counterID) {
    //     counter.value = counter.value + 1;
    //   }
    //   return counter
    // });
    // this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
