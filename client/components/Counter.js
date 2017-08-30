import React, { Component } from 'react';

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      seconds: 30,
      timer: 0
    };
  }

  updateSeconds = () => {
    if (this.props.addTime) {
      this.props.updateFlag();
      this.setState({seconds: this.state.seconds + 5});
    }
    if (this.props.subTime) {
      this.props.updateFlag();
      this.setState({seconds: this.state.seconds - 2});
    }
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
    this.state.timer = setInterval(this.updateSeconds, 1000);
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