import React, { Component } from 'react';

class Loser extends Component {


  render() {

    return (
      <div>
        You lost!<br />
        <button onClick={() => this.props.changeView('app')}>Try again?</button>
      </div>
    );
  };
};

export default Loser;