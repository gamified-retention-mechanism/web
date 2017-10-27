import React from 'react'
import { Router, Route } from 'react-router-dom'
import history from './history'
import App from './App'
import GameLandingPage from './GameLandingPage'
import TeamLandingPage from './TeamLandingPage'

export default () => (
  <Router history={history} >
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/:gameID/:teamName" component={TeamLandingPage}/>
      <Route exact path="/:gameID" component={GameLandingPage}/>
    </div>
  </Router>
)
