import React, { Component } from 'react';

class Login extends Component {


  render() {

    return (
      <div>
        <form onSubmit={(e) => this.props.login(e, this.refs)}>
          Username:
        <input id="username" placeholder="username" ref="username"></input><br />
          Password:
        <input id="password" type="password" placeholder="password" ref="password"></input>
        <input type="submit" value="Login" ></input>
        </form>
        <button onClick={() => this.props.changeView('register')}>Register</button>
      </div>
    );
  };
};

export default Login;