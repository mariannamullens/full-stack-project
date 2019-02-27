import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    const errors = this.props.errors.map(error => <li>{error}</li>)
    return (
      <div>
        <ul>{errors}</ul>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <label>Hi there! My name is
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput("name")}
            />
          </label>

          <label>Here’s my email address:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>And here’s my password:
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
          </label>

          <input type="submit" className="submit-signup" value="Sign me up!" />
        </form>
      </div>
    )
  }
}

export default SignupForm;