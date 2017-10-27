import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as actions from '../actions'

class Lobby extends Component {

  constructor(props) {
    super(props)

    this.state = {

    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    //TODO - perform loading operations here
  }

  render() {
    const { event_id, team_name } = this.props.match.params

    return (
      <div>
        <p className="App-intro">
          Team {team_name}
        </p>
        <p>
          Your game will begin momentarily
        </p>
      </div>
    )
  }
}

export default Lobby
