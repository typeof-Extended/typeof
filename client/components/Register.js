import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      isLoggedIn: false
     };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name,
      username: event.target.username,
      password: event.target.password
    });
  }

  // when server is set up we want this to sent a GET request
  handleSubmit(event) {
    alert('A new user was submitted: ' + this.state.username);
    event.preventDefault();
    this.setState({isLoggedIn: true})
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            New Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          <label>
           New Password:
            <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>  
          <input type="submit" value="Submit" />
        </form>
    );
  }

}

export default Register;