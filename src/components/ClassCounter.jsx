import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
		};
		this.addCount = this.addCount.bind(this)
		this.minusCount = this.minusCount.bind(this)
  }

  addCount() {
		this.setState({count: this.state.count + 1})
  }

  minusCount() {
		this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <div>
          <h1>Счетчик</h1>
          <button onClick={this.addCount}>Increment</button>
          <button onClick={this.minusCount}>Decrement</button>
          <div>{this.state.count}</div>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
