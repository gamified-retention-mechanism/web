import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>
      <p>Welcome to the Gamification Retention Mechanism (GRM).</p>
      <p>Built as during SA Launch, October 2017 by the following team members:</p>
      <Table striped bordered condensed hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alias</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jit</td>
            <td>@jbiswas</td>
          </tr>
          <tr>
            <td>Steven</td>
            <td>@sdsteve</td>
          </tr>
          <tr>
            <td>Bini</td>
            <td>@berhebm</td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>@belkmar</td>
          </tr>
          <tr>
            <td>Keith</td>
            <td>@lafaso</td>
          </tr>
          <tr>
            <td>Dave</td>
            <td>@dmmal</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}

export default App
