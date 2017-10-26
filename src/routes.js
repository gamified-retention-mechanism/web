import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import GameLandingPage from './GameLandingPage'
import TeamLandingPage from './TeamLandingPage'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/:gameID/:teamName" component={TeamLandingPage}/>
      <Route exact path="/:gameID" component={GameLandingPage}/>
    </div>
  </Router>
)
