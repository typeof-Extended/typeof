import React, { Component } from 'react';
import CodeBlock from './CodeBlock';

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  // clean up passing down of props
  render() {

    return (
       <CodeBlock /> 
    );
  }  
}   

export default Views;