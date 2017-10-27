import React, { Component } from 'react'
import { Alert, PageHeader, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Question from './Question'
import * as questionActions from '../../question/actions'


class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'questions': this.props.questions,
      'error_message': '',
    }

    this.questionToggleHandler = this.questionToggleHandler.bind(this)
  }

  componentDidMount() {
    questionActions.listQuestions().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const next = Object.assign({}, this.state, {'questions': response.questions})
      this.setState(next)
    })
  }

  questionToggleHandler(index, selected){
    this.props.questionToggleHandler(index, selected)
  }

  render() {
    let { questions } = this.state
    if(!questions){
      questions = []
    }

    return (
      <div>
        { questions.map((question, i) => {
          <Question
            key={i}
            question={question}
            questionToggleHandler={this.questionToggleHandler}
          />
        })}
      </div>
    )
  }
}

export default Questions
