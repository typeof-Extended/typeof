import React, { Component } from 'react';
import ErrorCount from './ErrorCount';
import Interim from './Interim.js';
import GameBoard from './GameBoard.js';
let xhr = new XMLHttpRequest();

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      interimVisible: false,
      level: 1,
      allChallenges: []
    };
  }

  getStrings = () => {
    xhr.open('GET', 'http://localhost:3000/getstring');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let temp = [];
        let allChallenges = JSON.parse(xhr.responseText).reduce((acc, el, i) => {
          temp.push(el);
          if (temp.length === 5) {
            acc.push(temp);
            temp = [];
          }
          return acc;
        }, []);
        this.setState({ allChallenges });
      }
    }
    xhr.send();
  }

  nextLevel = () => {
    let newState = Object.assign({}, this.state)
    newState.interimVisible = true;
    newState.level = this.state.level + 1;
    this.setState(newState);
  }

  beginLevel = () => {
    let newState = Object.assign({}, this.state);
    newState.interimVisible = false;
    this.setState(newState);
  }

  componentDidMount = () => {
    this.getStrings();
  }

  render = () => {

    return (
      <div>{this.state.interimVisible ?
        <Interim beginLevel={this.beginLevel} level={this.state.level}/> :
        <GameBoard nextLevel={this.nextLevel} allChallenges={this.state.allChallenges[this.state.level - 1]} currLevel={this.state.level} changeView={this.props.changeView}/>} 
      </div>
    )
  };
}

export default Game;