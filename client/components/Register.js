import React, { Component } from 'react';

class Register extends Component {

  checkPass = (e) => {
    e.preventDefault();
    let password = this.refs.password.value;
    let confirmPass = this.refs.confirmPass.value;
    if (password === confirmPass) this.props.register(e, this.refs);
    else console.log('Passwords must match!');
  }


  render() {
    return (
      <div className="register">
        <form onSubmit={(e) => this.checkPass(e)}>
        <p>Email:</p>
        <input id="email" type="text" placeholder="email" ref="email"></input>
        <p>Username:</p>
        <input id="username" type="text" placeholder="username" ref="username"></input>
        <p>Password:</p>
        <input id="password" type="password" placeholder="password" ref="password"></input>
        <p>Confirm Password:</p>
        <input id="confirmPass" type="password" placeholder="Confirm Password" ref="confirmPass"></input>
          <input type="submit" value="Register" ></input>
        </form>
        <button onClick={() => this.props.changeView('login')}>Login</button>
      </div>
    );
  };
};

export default Register;