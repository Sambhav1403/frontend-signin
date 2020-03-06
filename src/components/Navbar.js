import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../toolbar/toolbar.css'
class Landing extends Component {
// removes the stored usertoken thus logout the user 
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    // navbar if user wants to register
    const loginRegLink = (
      <div className= "toolbar_navigation_items">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
      </div>
    )
    //navbar if user is logged in
    const userLink = (
      <div className= "toolbar_navigation_items">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
      </div>
    )

    return (
      <header className= "toolbar">
        <nav className= "toolbar_navigation">
            <div></div>
            <div className= "toolbar_logo">THE LOGO</div>
            <div className="spacer"></div>
            <div className= "toolbar_navigation_items">
                <ul>
                    <li><Link to= "/">Home</Link></li>
                </ul>
            </div>
            {/* turnary operator decides the which navbar to be show w.r.t user jwt_token */}
            {localStorage.usertoken ? userLink : loginRegLink}
        </nav>
    </header>
    )
  }
}

export default withRouter(Landing)