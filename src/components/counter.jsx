import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
    // tags: ['tag1', 'tag2', 'tag3'],
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tags to display</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        {this.state.count === 0 && 'Please update the list'}
        {this.renderTags()}
      </>
    );
  }
}

export default Counter;
