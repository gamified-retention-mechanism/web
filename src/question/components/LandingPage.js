import React, { Component } from 'react'
import { Alert, PageHeader, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as actions from '../actions'

const styles = {
  addButton:{
    textAlign:'right',
    float:'right',
    fontSize:'18px',
  },
}

class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {
      'questions': [],
      'error_message': '',
    }
  }

  componentDidMount() {
    actions.listQuestions().then((response) => {
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
    if(!questions){
      questions = []
    }

    return (
      <div>
        <PageHeader>
          Questions
          <Link to="/admin/questions/add" style={styles.addButton} className='btn btn-success'>Add</Link>
        </PageHeader>

        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }

        <Table responsive striped condensed>
          <thead>
            <tr>
              <th>Active</th>
              <th>Module</th>
              <th>Question</th>
            </tr>
          </thead>
          <tbody>
            { questions.map((question, i) => {
              return (
                <tr key={i}>
                  <td>{question.active ? 'Yes' : 'No'}</td>
                  <td>{question.module}</td>
                  <td><Link to={`/question/edit/${question.id}`}>{question.question}</Link></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Landing
