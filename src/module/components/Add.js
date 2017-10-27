import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import history from '../../history'
import * as actions from '../actions'

class Add extends Component {
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

    const moduleName = this.state.name

    if(moduleName === ''){
      const next = Object.assign({}, this.state, {'error_message': 'You must enter a module name'})
      this.setState(next)
      return
    }

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const module = Object.assign({}, {name: moduleName})
    actions.saveModule(module).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, module, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/modules`)
    })
  }

  render() {
    const { gameID } = this.props.match.params
    return (
      <div>
        <p className="App-intro">
          Let's Get Ready to Rumble!! {gameID}
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form inline>
          <FormGroup validationState={this.state.error_message !== '' ? 'error' : null}>
            <ControlLabel>Module Name</ControlLabel>
            {'  '}
            <FormControl
              type="text"
              placeholder="Presenting"
              value={this.state.name}
              onChange={(e) => { this.handleInputChange('name', e.target.value) }}
            />
            <FormControl.Feedback />
          </FormGroup>
          {'  '}
          <Button type="submit" onClick={this.handleSubmit}>
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add
