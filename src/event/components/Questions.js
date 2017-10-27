import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Alert, Button, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import * as moduleActions from '../../module/actions'
import * as questionActions from '../../question/actions'
import history from '../../history'
import * as actions from '../actions'


const styles = {
  saveButton: {
    marginTop: '1em',
    marginLeft: '1em',
  }
}

class Questions extends Component {
  constructor(props) {
    super(props)

    const { event_id } = this.props.match.params

    this.state = {
      event_id: event_id,
      questions: [],
      modules: [],
      error_message: ''
    }

    this.questionToggleHandler = this.questionToggleHandler.bind(this)
    this.handleModuleChange = this.handleModuleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    match: PropTypes.object.isRequired
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


  questionToggleHandler(question, selected){
    const next = Object.assign({}, this.state)
    next.questions = this.state.questions.map((q) => {
      if(q.id == question.id){
        q.selected = true
      }

      return q
    })

    this.setState(next)
  }

  handleModuleChange(module){
    console.log(`module changed: ${module}`)

    questionActions.listQuestions().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const questions = response.questions.filter((question) => question.module === module)
      const next = Object.assign({}, this.state, {'questions': questions})
      this.setState(next)
    })
  }

  handleSubmit(e){
    e.preventDefault()

    const { event_id, questions } = this.state

    console.log(`current state: ${JSON.stringify(this.state)}`)

    const event = Object.assign({}, {eventid: event_id, questions: questions})
    actions.updateEvent(event).then((response) => {
      if(response.api_error){
        const next = Object.assign({}, module, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      history.push(`/admin/events`)
    })
  }

  render() {
    let { questions, modules } = this.state

    if(!questions){
      questions = []
    }

    if(!modules){
      modules = []
    }

    console.log(`questions: ${JSON.stringify(questions)}`)

    return (
      <div>
        <p className="App-intro">
          Event Questions
        </p>
        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }
        <Form>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
              Module
            </Col>
            <Col sm={10}>
              <FormControl
                componentClass='select'
                bsSize='large'
                onChange={(e) => { this.handleModuleChange(e.target.value) }}>
                <option value=''>- Select Module -</option>
                { modules.map((module, i) => {
                  return (
                    <option key={i} value={module.name}>{module.name}</option>
                  )
                }) }
              </FormControl>
              <FormControl.Feedback />
            </Col>
          </FormGroup>

          { questions.map((question, i) => {
            console.log(`question: ${JSON.stringify(question)}`)
            return (
              <FormGroup>
                <Col sm={10} smOffset={2}>
                  <InputGroup>
                    <InputGroup.Addon>
                      <input type="checkbox"
                        aria-label="valid"
                        checked={question.selected}
                        onChange={(e) => { this.questionToggleHandler(question, e.target.checked) }}
                      />
                    </InputGroup.Addon>
                    <FormControl type="text" defaultValue={question.question} />
                  </InputGroup>
                  <FormControl.Feedback />
                </Col>
              </FormGroup>
            )
          }) }

          <FormGroup>
            <Col sm={2}>
              <Button style={styles.saveButton} type="submit" onClick={this.handleSubmit}>
                Save
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Questions
