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
    const { event_id, team_name } = this.props.match.params

    return (
      <div>
        <p className="App-intro">
          Game: {event_id}
        </p>
        <p>
          Coming soon - Team Landing Page
        </p>
      </div>
    )
  }
}

export default Landing
