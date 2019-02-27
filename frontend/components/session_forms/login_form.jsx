import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return event => {
      this.setState({[field]: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    console.log(this.props.errors)
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.email}
          placeholder="Email address"
          onChange={this.handleInput("email")}
        />

        <input 
          type="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleInput("password")}
        />

        <input type="submit" className="submit-input" value="Log in to Chitwise" />
      </form>
    )
  }
}

export default LoginForm;