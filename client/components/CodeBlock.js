import React, { Component } from 'react';


class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ["This is a super cool sentence"],
      textbox: [""]
    };
  };


handleChange = (event) => {
  let newCode = this.state.code;
  let userInput = this.refs.userinput.value;
  let newTextbox = this.state.textbox;
  if (userInput == newCode[0].charAt()) {
    let correct = newCode[0].substring(1);
    newCode.shift();
    newCode.push(correct);
    newTextbox.push(userInput);
    this.refs.userinput.value = "";
    this.setState({code: newCode, textbox: newTextbox});
  } else {
    alert("YOU WRONG!!!");
    this.refs.userinput.value="";
  };
};

  render(){
    return (
      <div>
        <p><span id="correct">{this.state.textbox}</span>{this.state.code}</p>
      <form>
        <label>
          User Input:
          <input type="text" onChange={this.handleChange} ref="userinput"/>
        </label>
      </form>
    </div>
    )
  };

};

export default CodeBlock;
