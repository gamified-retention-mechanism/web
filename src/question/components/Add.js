import React, { Component } from 'react'
import { Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import history from '../../history'
import * as moduleActions from '../../module/actions'
import * as actions from '../actions'

const defaultAnswers = [
  {
    'value':'',
    'valid':false,
  },
  {
    'value':'',
    'valid':false,
  },
  {
    'value':'',
    'valid':false,
  },
  {
    'value':'',
    'valid':false,
  }
]

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'error_message': '',
      'module':'',
      'modules':[],
      'value': '',
      'active': true,
      'answers':defaultAnswers
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAnswerInputChange = this.handleAnswerInputChange.bind(this)
    this.handleAnswerValidChange = this.handleAnswerValidChange.bind(this)
  }

  componentDidMount() {
    moduleActions.listModules().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const next = Object.assign({}, this.state, {'modules': response.modules})
      this.setState(next)
    })
  }

  handleInputChange(prop, val){
    const next = Object.assign({}, this.state)
    next[prop] = val
    this.setState(next)
  }

  handleAnswerInputChange(index, val){
    const next = Object.assign({}, this.state)
    next.answers[index].value = val
    this.setState(next)
  }

  handleAnswerValidChange(index, val){
    const next = Object.assign({}, this.state)
    next.answers[index].valid = val
    this.setState(next)
  }

  handleSubmit(e){
    e.preventDefault()

    const { module, active, value, answers } = this.state

    if(module === ''){
      const next = Object.assign({}, this.state, {'error_message': 'You must select a module'})
      this.setState(next)
      return
    }

    if(value === ''){
      const next = Object.assign({}, this.state, {'error_message': 'You must enter a question'})
      this.setState(next)
      return
    }

    //TODO - validate all of the answers

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const question = Object.assign({}, {module: module, active: active, question: value, answers: answers})
    actions.saveQuestion(question).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, module, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/admin/questions`)
    })
  }

  render() {
    let { modules, answers } = this.state
    if(!modules){
      modules = []
    }

    if(!answers){
      answers = defaultAnswers
    }

    return (
      <div>
        <p className="App-intro">
          Add Question
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form>
          <FormGroup>
            <Col smOffset={1} sm={1}>
              <input type="checkbox"
                aria-label="active"
                checked={this.state.active}
                onChange={(e) => { this.handleInputChange('active', e.target.checked) }}
              />
            </Col>
            <Col sm={10}>Active</Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Module
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass='select'
                bsSize='large'
                name='module'
                value={this.state.module}
                onChange={(e) => { this.handleInputChange('module', e.target.value) }}>
                <option value=''>-  -</option>
                { modules.map((module, i) => {
                  return (
                    <option key={i} value={module.name}>{module.name}</option>
                  )
                })}
              </FormControl>
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Question</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="What is the average airspeed velocity of an unladen swallow?"
                value={this.state.value}
                onChange={(e) => { this.handleInputChange('value', e.target.value) }}
              />
              <FormControl.Feedback />
            </Col>
          </FormGroup>
          { answers.map((answer, i) => {
            return (
              <FormGroup key={i}>
                <Col componentClass={ControlLabel} sm={2}>Answer {i + 1}</Col>
                <Col sm={10}>
                  <InputGroup>
                    <InputGroup.Addon>
                      <input type="checkbox"
                        aria-label="valid"
                        checked={answer.valid}
                        onChange={(e) => { this.handleAnswerValidChange(i, e.target.checked) }}
                      />
                    </InputGroup.Addon>
                    <FormControl
                      type="text"
                      value={answer.value}
                      onChange={(e) => { this.handleAnswerInputChange(i, e.target.value) }}
                    />
                  </InputGroup>
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            )
          })}
          <Button type="submit" onClick={this.handleSubmit}>
            Save
          </Button>
        </Form>
      </div>
    );
  }
}

export default Add
