import React, { Component } from 'react'
import PropTypes from 'prop-types'
import logo from './logo.svg'
import './App.css'

class TeamLanding extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    //TODO - perform loading operations here
  }

  render() {
    const { gameID, teamName } = this.props.match.params

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's Get Ready to Rumble!!</h1>
        </header>
        <p className="App-intro">
          Game: {gameID}
          Coming soon - {teamName} Team Landing Page
        </p>
      </div>
    )
  }
}

export default TeamLanding
