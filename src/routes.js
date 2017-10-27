import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './history'
import AppRoute from './AppRoute'
import Homepage from './Homepage'
import About from './About'
import GameLandingPage from './game/components/LandingPage'
import TeamLandingPage from './team/components/LandingPage'
import ModuleLandingPage from './module/components/LandingPage'
import AddModule from './module/components/Add'
import QuestionLandingPage from './question/components/LandingPage'
import AddQuestion from './question/components/Add'
import PageNotFound from './error/components/PageNotFound'

export default () => (
  <Router history={history} >
    <Switch>
      <AppRoute exact path='/' component={Homepage} />
      <AppRoute exact path='/about' component={About} />
      <AppRoute exact path='/modules' component={ModuleLandingPage} />
      <AppRoute exact path='/modules/add' component={AddModule} />
      <AppRoute exact path='/questions' component={QuestionLandingPage} />
      <AppRoute exact path='/questions/add' component={AddQuestion} />
      <AppRoute path='/:gameID/:teamName' component={TeamLandingPage} />
      <AppRoute path='/:gameID' component={GameLandingPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
