import React, { Component } from 'react';

class ErrorCount extends Component {
  render() {
    return (
      <div>
        Error Count: {this.props.errors}
      </div>
    );
  }
}

export default ErrorCount;
