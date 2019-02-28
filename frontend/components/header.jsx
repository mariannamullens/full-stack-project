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
    // TOFIX: move this to a functional component!
    const { currentUser, logout, isLoggedOut } = this.props;
    const notLoggedInLinks =
    <>
      <div className="not-logged-in">
        <button className="login-logout" onClick={this.showLogin}>Log in</button>
        <span>or</span>
        <Link className="signup" to="/signup">Sign up</Link>
      </div>
      {this.state.showLogin && <LoginFormContainer />}
      {this.props.errors.length > 0 && <ErrorsIndex errors={this.props.errors} />}
    </>

    const loggedInLinks = <button className="login-logout" onClick={this.handleLogout}>Logout</button>

    return(
      <header className="header">
      <h2 className="logo">Chitwise</h2>
      { isLoggedOut ? notLoggedInLinks : loggedInLinks }
    </header>
    )
  }
}

export default Header;