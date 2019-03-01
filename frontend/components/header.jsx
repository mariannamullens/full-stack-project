import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './session_forms/login_form_container';
import ErrorsIndex from './errors_index';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showLogin: false, showLogout: false }
    this.showLogin = this.showLogin.bind(this);
    this.showLogout = this.showLogout.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  showLogin() {
    this.state.showLogin ? 
      this.setState({ showLogin: false }) 
      :
      this.setState({ showLogin: true });
  }
  
  showLogin() {
    this.state.showLogin ? 
      this.setState({ showLogin: false }) 
      :
      this.setState({ showLogin: true });
  }

  showLogout() {
    this.state.showLogout ? 
      this.setState({ showLogout: false }) 
      :
      this.setState({ showLogout: true });
  }

  handleLogout(event) {
    this.setState({ showLogin: false })
    this.props.logout();
  }

  render () {
    const { isLoggedOut, currentUser } = this.props;

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
          <LoggedInContext 
            handleLogout={this.handleLogout} 
            currentUser={currentUser}
            showLogout={this.showLogout}
            booleanShowLogout={this.state.showLogout}
          /> }
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
    <div className="logged-in">
      <img src={window.images.cactus} />
      <button className="dropdown" onClick={props.showLogout}>
        <h1>{props.currentUser.name}</h1>
        <i className="arrow-down"></i>
      </button>
      { props.booleanShowLogout &&
      <button className="logout-button" onClick={props.handleLogout}>Logout</button>
      }
    </div>
  )
}

export default Header;