import React, { Component } from 'react'
import Question from './Question'
import { Col, ControlLabel, FormControl, FormGroup } from 'react-bootstrap'
import * as questionActions from '../../question/actions'


class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
    }

    this.questionToggleHandler = this.questionToggleHandler.bind(this)
    this.handleModuleChange = this.handleModuleChange.bind(this)
  }

  componentDidMount() {
    // questionActions.listQuestions().then((response) => {
    //   if(response.api_error){
    //     const next = Object.assign({}, this.state, {'error_message': response.api_error})
    //     this.setState(next)
    //     return
    //   }
    //
    //   const next = Object.assign({}, this.state, {'questions': response.questions})
    //   this.setState(next)
    // })
  }

  questionToggleHandler(index, selected){
    this.props.questionToggleHandler(index, selected)
  }

  handleModuleChange(module_id){
    console.log(`module changed: ${module_id}`)

    questionActions.listQuestionsByModule().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const next = Object.assign({}, this.state, {'questions': response.questions})
      this.setState(next)
    })
  }

  render() {
    let { questions } = this.state
    let { modules } = this.props

    if(!questions){
      questions = []
    }

    if(!modules){
      modules = []
    }

    return (
      <div>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Module
          </Col>
          <Col sm={10}>
            <FormControl
              componentClass='select'
              bsSize='large'
              onChange={(e) => { this.handleModuleChange(e.target.value) }}>
              <option value=''>-  -</option>
              { modules.map((module, i) => {
                return (
                  <option key={i} value={module.id}>{module.name}</option>
                )
              })}
            </FormControl>
            <FormControl.Feedback />
          </Col>
        </FormGroup>

        { questions.map((question, i) => {
          <Question
            key={i}
            question={question}
            questionToggleHandler={this.questionToggleHandler}
          />
        }) }
      </div>
    )
  }
}

export default Questions
