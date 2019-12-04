import React, { Component } from 'react'
import {
  Link
 } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

class Nav extends Component {

  state = {
    anchorEl: null
  }

  handleClick = e => {
    this.setState({
      anchorEl: true
    })
  }

  handleClose = e => {
    this.setState({
      anchorEl: false
    })
  }

  render() {
    const { anchorEl } = this.state
    
    return (
      <nav className="navbar navbar-expand-lg main-nav">
        <a className="navbar-brand position-relative" href="#">
          TME
        </a>
        <button className="navbar-toggler" type="button" 
          data-toggle="collapse" data-target="navmenu" 
          aria-controls="navmenu" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>  
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="htmltut" className="nav-link"> HTML </Link>
            </li>
            <li className="nav-item active">
              <Link to="csstut" className="nav-link"> CSS </Link>
            </li>
            <li className="nav-item active">
              <Link to="js" className="nav-link"> JavaScript </Link>
            </li>
            <li className="nav-item active">
              <Link to="reactjs" className="nav-link"> ReactJS </Link>
            </li>
          </ul>
          
        </div>
      </nav>
    )
  }
}

export default Nav;