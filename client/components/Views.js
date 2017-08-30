import React, { Component } from 'react';
import Game from './Game.js';
import Login from './Login.js';
import Register from './Register.js';
import Interim from './Interim.js';
import UserProfile from './UserProfile.js';
let xhr = new XMLHttpRequest();

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
    };
  }

  login = (e, formData) => {
    e.preventDefault();
    let username = formData.username.value;
    let password = formData.password.value;
    xhr.open('POST', 'http://localhost:3000/login');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.changeView('app');
      }
    }
    xhr.send(JSON.stringify({ username, password }));
  }

  register = (e, formData) => {
    e.preventDefault();
    let username = formData.username.value;
    let email = formData.email.value;
    let password = formData.password.value;
    xhr.open('POST', 'http://localhost:3000/createuser');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.setState({view: 'app'});
      }
    }
    xhr.send(JSON.stringify({ username, email, password }));
  }

  changeView = (view) => {
    this.setState({ view });
  } 


  render() {

    if (this.state.view === 'login') return <Login login={this.login} changeView={this.changeView} />;
    else if (this.state.view === 'register') return <Register register={this.register} changeView={this.changeView} />;
    else if (this.state.view === 'app') return <Game changeView={this.changeView}/>;
    else if (this.state.view === 'profile') return <UserProfile />;

  }  
}   

export default Views;