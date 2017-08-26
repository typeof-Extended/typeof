import React, { Component } from 'react';
import Register from './Register';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    setState({
      username: event.target.username,
      password: event.target.password
    });
  }

  // when server is set up we want this to sent a GET request
  handleSubmit(event) {
    setState
    console.log(this.state.username)
    if (this.state.username !== 'Jason') {
      alert('Wrong Username or Password'); 
      event.preventDefault();
    } else {
      alert('Welcome ' + this.state.username);
      event.preventDefault();
    }  
  }

  render() {
    return (
    <div>
      <div id="bander">
        <h2>Login</h2>
      </div>  
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          </div>
          <div>
          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleChange} />
          </label>  
          </div>
          <input type="submit" value="Login" />
        </form>
        <span>Don't have an account?</span>
        <span>
        </span>
        </div>
      </div>    
    );
  }
}

export default Login;