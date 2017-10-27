import React from 'react'
import { Router } from 'react-router-dom'
import history from './history'
import App from './App'
import AppRoute from './AppRoute'
import GameLandingPage from './game/components/LandingPage'
import TeamLandingPage from './team/components/LandingPage'

export default () => (
  <Router history={history} >
    <div>
      <AppRoute exact path="/:gameID/:teamName" component={TeamLandingPage}/>
      <AppRoute exact path="/:gameID" component={GameLandingPage}/>
    </div>
  </Router>
)
