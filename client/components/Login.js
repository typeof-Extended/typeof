import React, { Component } from 'react';

class Login extends Component {


  render() {

    return (
      <div className="login">
        <form onSubmit={(e) => this.props.login(e, this.refs)}>
        <p>Username:</p>
        <input id="username" type="text" placeholder="username" ref="username"></input>
        <p>Password:</p>
        <input id="password" type="password" placeholder="password" ref="password"></input>
        <input type="submit" value="Login" ></input>
        </form>
        <button onClick={() => this.props.changeView('register')}>Register</button>
      </div>
    );
  };
};

export default Login;