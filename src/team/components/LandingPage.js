import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Landing extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    //TODO - perform loading operations here
  }

  render() {
    const { gameID, teamName } = this.props.match.params

    return (
      <div>
        <p className="App-intro">
          Game: {gameID}
        </p>
        <p>
          Coming soon - {teamName} Team Landing Page
        </p>
      </div>
    )
  }
}

export default Landing
