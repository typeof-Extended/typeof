import React, { Component } from 'react';
import ErrorCount from './ErrorCount.js';
import Counter from './Counter.js';

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


  render() {

    return (
      <div>
        <span id="correct">{this.state.textbox}</span><span>{this.state.currChallenge}</span><br />
        User Input:
        <input id="input" type="text" onChange={() => this.swapDivs()} onKeyDown={this.startTimer} ref="userinput" />
        <br />
        <Counter changeView={this.props.changeView} /><br />
        <ErrorCount errors={this.state.errors}/>
      </div>
    );
  };
};

export default GameBoard;