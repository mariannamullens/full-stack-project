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
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          value={this.state.email}
          placeholder="email"
          onChange={this.handleInput("email")}
        />

        <input 
          type="password"
          value={this.state.password}
          placeholder="password"
          onChange={this.handleInput("password")}
        />

        <input type="submit" value="Log in to Chitwise" />
      </form>
    )
  }
}

export default LoginForm;