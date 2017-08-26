import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      password: event.target.password
    });
  }

  // when server is set up we want this to sent a GET request
  handleSubmit(event) {
    alert('You are now logging in: ' + this.state.username);
    event.preventDefault();
    this.setState({isLoggedIn: true})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>  
          <input type="submit" value="Login" />
        </form>
        <span>Don't have an account?</span>
        <span>
        
        </span>  
      </div>
    );
  }
}

export default Login;