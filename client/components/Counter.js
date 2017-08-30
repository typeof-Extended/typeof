import React, { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      seconds: 5,
      timer: 0
    };
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });
    if (seconds === 0) {
      clearInterval(this.state.timer);
      this.props.changeView('loser');
    }
  }

  componentDidMount = () => {
    this.state.timer = setInterval(this.countDown, 1000);
  }


  render() {

    return (
      <div>
        Seconds Remaining: {this.state.seconds}
      </div>
    );
  };
};

export default Counter;