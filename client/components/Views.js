import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';

class Views extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active : 'Login',
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let active = this.state.active;
    let switchActive = active === 'Login' ? 'Register' : 'Login';
    this.setState({
      active: switchActive
    });
  }


  render() {
    let active = this.state.active;

    return (
      <div>
        {active === 'Login' ? (
          <Login /> 
        ) : active === 'Register' ? (
          <Register />
        ) : null}
        <button type="button" onClick={this.handleClick}>
         Login/Register
        </button>
      </div>  
    );
  }  
}   

export default Views;