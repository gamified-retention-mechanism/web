import React, { Component } from 'react'
import { Alert, Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, InputGroup } from 'react-bootstrap'
import Questions from './Questions'
import * as questionActions from '../../question/actions'
import * as actions from '../actions'
import history from '../../history'

const styles = {
  clear:{
    clear:'both'
  },
  subHeadings:{
    float:'left',
    clear:'both'
  },
}

const defaultDates = [
  {
    'day': 1,
    'questions':[
      {
        'name':'Question 1',
        'selected':true
      },
      {
        'name':'Question 2',
        'selected':false
      }
    ]
  },
  {
    'day': 2,
    'questions':[
      {
        'name':'Question 1',
        'selected':true
      },
      {
        'name':'Question 2',
        'selected':false
      }
    ]
  }
]

class Add extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'error_message': '',
      'name': '',
      'start_date': '',
      'end_date': '',
      'days': defaultDates
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

    //TODO - implement me
  }

  questionToggleHandler(day, index, selected){
    const next = Object.assign({}, this.state)
    next.days[day].questions[index].selected = selected
    this.setState(next)
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

          <h2 style={styles.subHeadings}>Questions</h2>

          <h3 style={styles.subHeadings}>Day 1</h3>
          <hr />
          <Questions
            questionToggleHandler={(index, selected) => { this.questionToggleHandler(0, index, selected)}}
          />

          <h3 style={styles.subHeadings}>Day 2</h3>
          <hr />
          <Questions
            questionToggleHandler={(index, selected) => { this.questionToggleHandler(1, index, selected)}}
          />

          <h3 style={styles.subHeadings}>Day 3</h3>
          <hr />
          <Questions
            questionToggleHandler={(index, selected) => { this.questionToggleHandler(2, index, selected)}}
          />

          <h3 style={styles.subHeadings}>Day 4</h3>
          <hr />
          <Questions
            questionToggleHandler={(index, selected) => { this.questionToggleHandler(3, index, selected)}}
          />

          <FormGroup style={styles.clear}>
            <Col sm={2} smOffset={1}>
              <Button type="submit" onClick={this.handleSubmit}>
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
