import React, { Component } from 'react';


class Interim extends Component {


  render() {
    return (
      <div>
        Nice job!<br />
        <button onClick={() => this.props.beginLevel()}>Continue to Level {this.props.level}</button>
      </div>
    );
  };
};

export default Interim;