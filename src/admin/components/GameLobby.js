import React, { Component } from 'react'
import { Alert, Button, Label, PageHeader } from 'react-bootstrap'
import PropTypes from 'prop-types'
import * as actions from '../actions'
import history from '../../history'

const styles = {
  team:{
    margin: '0.75em',
    padding: '0.5em',
    fontSize: '1.5em',
    display: 'block',
  },
  startButton:{
    textAlign:'right',
    float:'right',
    fontSize:'1.5em',
    marginTop:'-0.5em',
    marginRight:'0.5em',
  },
}

class Lobby extends Component {

  constructor(props) {
    super(props)
    this.startGame = this.startGame.bind(this)

    this.state = {
      error_message: ''
    }
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    //TODO - perform loading operations here
  }

  startGame(e){
    e.preventDefault()

    const { event_id } = this.props.match.params

    actions.startGame(event_id).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, module, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/admin/event/${event_id}/question/1`)
    })
  }

  render() {
    return (
      <div>
        <PageHeader>
          Teams are ready to play
          <Button style={styles.startButton} bsStyle="success" onClick={this.startGame}>Go!</Button>
        </PageHeader>

        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }

        <Label style={styles.team} bsStyle="info">Honeybuckets</Label>
        <Label style={styles.team} bsStyle="info">6b</Label>
        <Label style={styles.team} bsStyle="info">Cloud Cats</Label>
        <Label style={styles.team} bsStyle="info">Hi-5</Label>
        <Label style={styles.team} bsStyle="info">AWSome Ants</Label>
        <Label style={styles.team} bsStyle="info">Instructors</Label>
      </div>
    )
  }
}

export default Lobby
