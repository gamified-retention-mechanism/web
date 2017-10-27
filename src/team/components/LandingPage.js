import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import history from '../../history'
import * as actions from '../actions'

class Landing extends Component {

  constructor(props) {
    super(props)

    this.state = {
      'players': '',
      'error_message': '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    //TODO - perform loading operations here
  }

  handleInputChange(prop, val){
    const next = Object.assign({}, this.state)
    next[prop] = val
    this.setState(next)
  }

  handleSubmit(e){
    e.preventDefault()

    const { team_name, event_id } = this.props.match.params
    const { players } = this.state

    if(players === ''){
      const next = Object.assign({}, this.state, {'error_message': 'You must enter at least one team member'})
      this.setState(next)
      return
    }

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const team = Object.assign({}, {players: players, name: team_name, event_id: event_id})
    actions.updateTeam(team).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, team, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/${event_id}/${team_name}/lobby`)
    })
  }

  render() {
    const { event_id, team_name } = this.props.match.params

    return (
      <div>
        <p className="App-intro">
          Team {team_name}
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form inline>
          <FormGroup validationState={this.state.error_message !== '' ? 'error' : null}>
            <ControlLabel>Players (Comma Separated Values)</ControlLabel>
            {'  '}
            <FormControl
              type="text"
              placeholder="Mark, Bini, Jit"
              value={this.state.players}
              onChange={(e) => { this.handleInputChange('players', e.target.value) }}
            />
            <FormControl.Feedback />
          </FormGroup>
          {'  '}
          <Button type="submit" onClick={this.handleSubmit}>
            Ready!
          </Button>
        </Form>
      </div>
    )
  }
}

export default Landing
