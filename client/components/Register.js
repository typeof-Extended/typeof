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
      <div>
        <form onSubmit={(e) => this.checkPass(e)}>
          Email:
        <input id="email" placeholder="email" ref="email"></input><br />
          Username:
        <input id="username" placeholder="username" ref="username"></input><br />
          Password:
        <input id="password" type="password" placeholder="password" ref="password"></input><br />
          Confirm Password:
        <input id="confirmPass" type="password" placeholder="Confirm Password" ref="confirmPass"></input>
          <input type="submit" value="Register" ></input>
        </form>
        <button onClick={() => this.props.changeView('login')}>Login</button>
      </div>
    );
  };
};

export default Register;