import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './history'
import AppRoute from './AppRoute'
import Homepage from './Homepage'
import About from './About'
import GameLandingPage from './game/components/LandingPage'
import TeamLandingPage from './team/components/LandingPage'
import PageNotFound from './error/components/PageNotFound'

export default () => (
  <Router history={history} >
    <Switch>
      <AppRoute exact path='/' component={Homepage} />
      <AppRoute exact path='/about' component={About} />
      <AppRoute path='/:gameID/:teamName' component={TeamLandingPage} />
      <AppRoute path='/:gameID' component={GameLandingPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
