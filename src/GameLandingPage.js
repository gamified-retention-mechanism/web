import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

class GameLanding extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  static defaultProps = {
  }

  render() {
    const { gameID } = this.props.match.params
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's Get Ready to Rumble!!</h1>
        </header>
        <p className="App-intro">
          Coming soon - Game Landing Page for Game {gameID}
        </p>
      </div>
    );
  }
}

export default GameLanding
