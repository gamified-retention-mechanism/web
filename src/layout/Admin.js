import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">GRM</h1>
        </header>
        <Navbar>
          <Nav>
            <NavItem>
              <Link to="/admin/modules" className='navbar-link'>
                Modules
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/questions" className='navbar-link'>
                Questions
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/admin/events" className='navbar-link'>
                Events
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
