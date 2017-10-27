import React, { Component } from 'react'
import { Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import Questions from './Questions'
import * as actions from '../actions'
import history from '../../history'

const styles = {
  clear:{
    clear:'both'
  },
  subHeadings:{
    float:'left',
    clear:'both',
    marginLeft: '0.5em',
  },
  saveButton: {
    marginTop: '1em',
    marginLeft: '1em',
  }
}

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'error_message': '',
      'name': '',
      'start_date': '',
      'end_date': ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
  }

  handleInputChange(prop, val){
    const next = Object.assign({}, this.state)
    next[prop] = val
    this.setState(next)
  }

  handleSubmit(e){
    e.preventDefault()

    const { name, start_date, end_date } = this.state

    if(name === ''){
      const next = Object.assign({}, this.state, {'error_message': 'Event Name is required'})
      this.setState(next)
      return
    }

    if(start_date === ''){
      const next = Object.assign({}, this.state, {'error_message': 'Start Date is required'})
      this.setState(next)
      return
    }

    if(end_date === ''){
      const next = Object.assign({}, this.state, {'error_message': 'End Date is required'})
      this.setState(next)
      return
    }

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const event = Object.assign({}, {name:name, start_date:start_date, end_date:end_date})
    actions.saveEvent(event).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, module, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/admin/events/${response.eventid}/questions`)
    })
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          Add Event
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Name</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="SA Launch October 2017"
                value={this.state.value}
                onChange={(e) => { this.handleInputChange('name', e.target.value) }}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Start Date</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="mm/dd/yyyy"
                value={this.state.value}
                onChange={(e) => { this.handleInputChange('start_date', e.target.value) }}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>End Date</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="mm/dd/yyyy"
                value={this.state.value}
                onChange={(e) => { this.handleInputChange('end_date', e.target.value) }}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={2}>
              <Button style={styles.saveButton} type="submit" onClick={this.handleSubmit}>
                Save
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Add
