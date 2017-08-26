import React, { Component } from 'react';
import ErrorCount from './ErrorCount';
import Timer from './Timer';

const codeProblems = [["Easy"], ["GET THE FUCK OUT OF HERE"], ["The answer is 42"], ["Codesmith"]];

let i = 0;

class CodeBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ["Prepare Yourself"],
      textbox: [""],
      errors : 0,
    };
  };

  handleError = () => {
    let newError = this.state.errors;
    newError++;
    this.setState({errors: newError});
  }

  handleChange = (event) => {
    let typedCode = this.state.code;
    let userInput = this.refs.userinput.value;
    console.log(this.refs.userinput.value);
    let newTextbox = this.state.textbox;
    if (typedCode[0].length == 1) {
      this.refs.userinput.value="";
      this.setState({code: codeProblems[i], textbox: [""], errors: 0}, () => {i++});
    } else if (userInput == typedCode[0].charAt()) {
      let correct = typedCode[0].substring(1);
      typedCode.shift();
      typedCode.push(correct);
      newTextbox.push(userInput);
      this.refs.userinput.value = "";
      this.setState({code: typedCode, textbox: newTextbox});
    } else {
      alert("YOU WRONG!!!");
      this.refs.userinput.value="";
      this.handleError();
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
        <ErrorCount errors={this.state.errors}/>
      </div>
          )
  };
};

export default CodeBlock;
