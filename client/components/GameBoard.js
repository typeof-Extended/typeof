import React, { Component } from 'react';
import ErrorCount from './ErrorCount.js';

class GameBoard extends Component {


  constructor() {
    super();
    this.state = {
      currChallenge: ["Prepare Yourself"],
      errors: 0,
      textbox: [""],
      challengeCounter: 0,
      allChallenges: [],
      textbox: [""],
      time: {},
      seconds: 60,
    }
  }

  handleInputError = () => {
    let newError = this.state.errors;
    newError++;
    this.setState({ errors: newError });
  };

  swapDivs = () => {
    let targetCode = this.state.currChallenge;
    let userInput = document.getElementById('input').value;
    let newTextbox = this.state.textbox;
    if (targetCode[0].length === 1) {
      this.refs.userinput.value = '';
      this.setState({
        challengeCounter: this.state.challengeCounter + 1,
        currChallenge: this.props.allChallenges[this.state.challengeCounter],
        textbox: [""],
        errors: 0
      });
      if (this.state.challengeCounter % 5 === 0 && this.state.challengeCounter > 0) this.props.nextLevel();
    } else if (userInput === targetCode[0].charAt()) {
      let remaining = targetCode[0].substring(1);
      targetCode.shift();
      targetCode.push(remaining);
      newTextbox.push(userInput);
      this.refs.userinput.value = '';
      this.setState({ currChallenge: targetCode, textbox: newTextbox });
    } else {
      this.refs.userinput.value = '';
      this.handleInputError();
    };
  };

  // countDown = () => {
  //   // Remove one second, set state so a re-render happens.
  //   let seconds = this.state.seconds - 1;
  //   this.setState({
  //     time: this.secondsToTime(seconds),
  //     seconds: seconds,
  //   });
  //   // Check if we're at zero.
  //   if (seconds === 0) {
  //     alert('You lose!')
  //     clearInterval(this.timer);
  //   }
  // }

  // startTimer = () => {
  //   if (this.timer === 0) {
  //     this.timer = setInterval(this.countDown, 1000);
  //   }
  // }



  // secondsToTime = (secs) => {
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);
  //   let obj = {
  //     "h": hours,
  //     "m": minutes,
  //     "s": seconds
  //   };
  //   return obj;
  // }


  render() {

    return (

      <div className="game-board">
        <span id="correct">{this.state.textbox}</span>
        <span>{this.state.currChallenge}</span>
        <p>User Input:</p>
        <input id="input" type="text" onChange={() => this.swapDivs()} onKeyDown={this.startTimer} ref="userinput" />
        {/* {this.state.time.m}:{this.state.time.s} */}
        <ErrorCount errors={this.state.errors}/>
      </div>
    );
  };
};

export default GameBoard;