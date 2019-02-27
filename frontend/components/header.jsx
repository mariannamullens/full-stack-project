import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showLogin: false }
    this.showLogin = this.showLogin.bind(this);
  }

  showLogin() {
    this.state.showLogin ? 
      this.setState({ showLogin: false }) 
      :
      this.setState({ showLogin: true });
  }

  render () {
    const { currentUser, logout, isLoggedOut } = this.props;
    const notLoggedInLinks =
    <div className="not-logged-in">
      <button className="login-logout" onClick={this.showLogin}>Log in</button>
      <span>or</span>
      <Link className="signup" to="">Sign up</Link>
    </div>

    const loggedInLinks = <button className="login-logout" onClick={logout}>Logout</button>

    return(
      <header className="header">
      <h2 className="logo">Chitwise</h2>
      { isLoggedOut ? notLoggedInLinks : loggedInLinks }
    </header>
    )
  }
}

export default Header;