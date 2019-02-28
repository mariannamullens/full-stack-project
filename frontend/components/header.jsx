import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import ErrorsIndex from './errors_index';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showLogin: false }
    this.showLogin = this.showLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  showLogin() {
    this.state.showLogin ? 
      this.setState({ showLogin: false }) 
      :
      this.setState({ showLogin: true });
  }

  handleLogout(event) {
    this.setState({ showLogin: false })
    this.props.logout();
  }

  render () {
    const { isLoggedOut } = this.props;

    return(
      <header className="header">
      <h2 className="logo">Chitwise</h2>
      { isLoggedOut ? 
          <LoggedOutContext 
            showLogin={this.showLogin} 
            booleanShowLogin={this.state.showLogin}
            errors={this.props.errors}
          />
          : 
          <LoggedInContext handleLogout={this.handleLogout} /> }
    </header>
    )
  }
}

const LoggedOutContext = (props) => {
  const { errors, booleanShowLogin, showLogin } = props;

  return (
    <>
      <div className="not-logged-in">
        <button className="login-logout" onClick={showLogin}>Log in</button>
        <span>or</span>
        <Link className="signup" to="/signup">Sign up</Link>
      </div>
      {booleanShowLogin && <LoginFormContainer />}
      {errors.length > 0 && <ErrorsIndex errors={errors} />}
    </>
  )
}

const LoggedInContext = (props) => {
  return (
    <button className="login-logout" onClick={props.handleLogout}>Logout</button>
  )
}

export default Header;