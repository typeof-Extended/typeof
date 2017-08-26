import React, { Component } from 'react';

class ErrorCount extends Component {
  render() {
    return (
      <div id="error">
        Error Count: {this.props.errors}
      </div>
    );
  }
}

export default ErrorCount;
