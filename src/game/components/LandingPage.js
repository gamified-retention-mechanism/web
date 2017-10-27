import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import history from '../../history'
import * as actions from '../../team/actions'

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'name': '',
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

    const team_name = this.state.name
    const { event_id } = this.props.match.params

    if(team_name === ''){
      const next = Object.assign({}, this.state, {'error_message': 'You must enter a team name'})
      this.setState(next)
      return
    }

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const team = Object.assign({}, {name: team_name})
    actions.saveTeam(team).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, team, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/${event_id}/${team_name}`)
    })
  }

  render() {
    const { event_id } = this.props.match.params
    return (
      <div>
        <p className="App-intro">
          Let's Get Ready to Rumble!! {event_id}
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form inline>
          <FormGroup validationState={this.state.error_message !== '' ? 'error' : null}>
            <ControlLabel>Team Name</ControlLabel>
            {'  '}
            <FormControl
              type="text"
              placeholder="Honeybuckets"
              value={this.state.name}
              onChange={(e) => { this.handleInputChange('name', e.target.value) }}
            />
            <FormControl.Feedback />
          </FormGroup>
          {'  '}
          <Button type="submit" onClick={this.handleSubmit}>
            Enter Lobby
          </Button>
        </Form>
      </div>
    );
  }
}

export default Landing
