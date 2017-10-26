import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/:gameID" component={About}/>
      <Route path="/:gameID/:teamName" component={Topics}/>
    </div>
  </Router>
)
