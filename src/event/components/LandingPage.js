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
      'events': [],
      'error_message': '',
    }
  }

  componentDidMount() {
    actions.listEvents().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const next = Object.assign({}, this.state, {'events': response.events})
      this.setState(next)
    })
  }

  render() {
    let { events } = this.state
    if(!events){
      events = []
    }

    return (
      <div>
        <PageHeader>
          Events
          <Link to="/events/add" style={styles.addButton} className='btn btn-success'>Add</Link>
        </PageHeader>

        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }

        <Table responsive striped condensed>
          <thead>
            <tr>
              <th>Start</th>
              <th>End</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { events.map((event, i) => {
              return (
                <tr key={i}>
                  <td>{event.start}</td>
                  <td>{event.end}</td>
                  <td><Link to={`/event/edit/${event.id}`}>{event.name}</Link></td>
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
