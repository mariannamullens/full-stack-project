import React from 'react';
import ErrorsIndex from '../errors_index';

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
    return (
      <div className="signup-page">
        <img src={window.images.banana} />
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h1>INTRODUCE YOURSELF</h1>
          { this.props.errors.length > 0 && <ErrorsIndex errors={this.props.errors} />}
          <label>Hi there! My name is
            <br></br>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput("name")}
            />
          </label>

          <label>Here’s my email address:
            <br></br>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput("email")}
            />
          </label>

          <label>And here’s my password:
            <br></br>
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

  componentWillUnmount() {
    this.props.clearErrors();
  }
}

export default SignupForm;