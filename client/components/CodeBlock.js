import React, { Component } from 'react';
import ErrorCount from './ErrorCount';
let xhr = new XMLHttpRequest();


let i = 0;

class CodeBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      currChallenge: ["Prepare Yourself"],
      textbox: [""],
      errors : 0,
      time: {}, 
      seconds: 20,
      allChallenges: []
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  handleInputError = () => {
    let newError = this.state.errors;
    newError++;
    this.setState({errors: newError});
  };

  swapDivs = () => {
    let targetCode = this.state.currChallenge;
    let userInput = this.refs.userinput.value;
    let newTextbox = this.state.textbox;
    if (targetCode[0].length === 1) {
      this.refs.userinput.value = '';
      this.setState({currChallenge: this.state.allChallenges[i], textbox: [""], errors: 0}, () => i++);
    } else if (userInput === targetCode[0].charAt()) {
      let remaining = targetCode[0].substring(1);
      targetCode.shift();
      targetCode.push(remaining);
      newTextbox.push(userInput);
      this.refs.userinput.value = '';
      this.setState({currChallenge: targetCode, textbox: newTextbox});
    } else {
      this.refs.userinput.value='';
      this.handleInputError();
    };
  };

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  getStrings = (level) => {
    xhr.open('POST', 'http://localhost:3000/getstring');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({allChallenges: JSON.parse(xhr.responseText)});
      }
    }
    xhr.send(JSON.stringify({ level }));
  }

  componentDidMount() {
    this.getStrings(1);
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
  //   // Check if we're at zero.
    if (seconds === 0) { 
      alert('You lose!')
      clearInterval(this.timer);
    }
  }

  render() {

    
    return (
      <div>
          <span id="correct">{this.state.textbox}</span><span>{this.state.currChallenge}</span>
        <form>
          <label id="input">
            User Input:
            <input type="text" onChange={this.swapDivs} onKeyDown={this.startTimer} ref="userinput"/>
          </label>
        </form>
        {this.state.time.m}:{this.state.time.s}
        <ErrorCount errors={this.state.errors}/>
      </div>
    )
  };
} 

export default CodeBlock;