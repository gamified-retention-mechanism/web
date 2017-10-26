import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './App'
import GameLandingPage from './GameLandingPage'
import TeamLandingPage from './TeamLandingPage'

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/:gameID/:teamName" component={TeamLandingPage}/>
      <Route path="/:gameID" component={GameLandingPage}/>
    </div>
  </Router>
)
