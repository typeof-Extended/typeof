import React, { Component } from 'react';


class Register extends Component {
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
    this.setState({
      username: event.target.username,
      password: event.target.password
    });
  }

  // when server is set up we want this to sent a GET request
  handleSubmit(event) {
    alert('New menber was submitted: ' + this.state.username);
    event.preventDefault();
  }

  render() {
    return (
      <div>
      <div id="bander">
       <h2>Register</h2>
       </div>
       <div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            New Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
          </div>
          <div>
          <label>
           New Password:
            <input type="password" value={this.state.password} onChange={this.handleChange} />
          </label>  
          </div>
          <input type="submit" value="Submit" />
        </form>
       </div> 
       </div> 
    );
  }

}

export default Register;