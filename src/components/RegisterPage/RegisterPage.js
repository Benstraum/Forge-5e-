import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Container } from 'semantic-ui-react'

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Container textAlign='center'>
        <br />
        <div>
          {this.props.errors.registrationMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form onSubmit={this.registerUser}>
            <h1 className="register">Register User</h1>
            <div>
              <Input
                type="text"
                label="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </div>
            <br />
            <div>
              <Input
                type="password"
                label="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </div>
            <br />
            <div>
              <Button
                basic color='black'
                type="button"
                className="link-button"
                onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
              >
                Login
          </Button>
              <Button
                className="register"
                type="submit"
                name="submit"
                value="Register"
              >Register</Button>
            </div>
          </form>
        </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

