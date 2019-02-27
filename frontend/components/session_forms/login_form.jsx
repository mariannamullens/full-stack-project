import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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

  demoLogin(event) {
    event.preventDefault();
    const user = { email: "demouser@email.com", password: "password" };
    this.props.login(user).then(() => this.props.history.push('/'));
    //iterate over each element in an iterable object
    //this.setState for each item in that iterable object
    //do it for both login and password
    //this.props.login!
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

        <button onClick={this.demoLogin}>Demo Login</button>
        <input type="submit" className="submit-input" value="Log in to Chitwise" />
      </form>
    )
  }
}

export default LoginForm;