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
      'modules': [],
      'error_message': '',
    }
  }

  componentDidMount() {
    actions.listModules().then((response) => {
      if(response.api_error){
        const next = Object.assign({}, this.state, {'error_message': response.api_error})
        this.setState(next)
        return
      }

      const next = Object.assign({}, this.state, {'modules': response.modules})
      this.setState(next)
    })
  }

  render() {
    let { modules } = this.state
    if(!modules){
      modules = []
    }

    return (
      <div>
        <PageHeader>
          Modules
          <Link to="/admin/modules/add" style={styles.addButton} className='btn btn-success'>Add</Link>
        </PageHeader>

        { this.state.error_message !== '' &&
          <Alert bsStyle="warning">{this.state.error_message}</Alert>
        }

        <Table responsive striped condensed>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            { modules.map((module, i) => {
              return (
                <tr key={i}>
                  <td>{module.id}</td>
                  <td><Link to={`/module/edit/${module.id}`}>{module.name}</Link></td>
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
