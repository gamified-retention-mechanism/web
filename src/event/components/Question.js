import React, { Component } from 'react'
import { Col, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import * as actions from '../actions'

class Question extends Component {
  constructor(props) {
    super(props)

    this.handleSelectedAnswerToggle = this.handleSelectedAnswerToggle.bind(this)
  }

  handleSelectedAnswerToggle(index, selected){
    this.props.questionToggleHandler(index, selected)
  }

  render() {
    const { question } = this.props
    return (
      <FormGroup>
        <Col sm={10}>
          <InputGroup>
            <InputGroup.Addon>
              <input type="checkbox"
                aria-label="valid"
                checked={question.selected}
                onChange={(e) => { this.handleSelectedAnswerToggle(question.index, e.target.checked) }}
              />
            </InputGroup.Addon>
            <FormControl type="text" value={question.question} />
          </InputGroup>
          <FormControl.Feedback />
        </Col>
      </FormGroup>
    )
  }
}

export default Question
