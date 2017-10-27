import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './history'
import AppRoute from './AppRoute'
import Homepage from './Homepage'
import About from './About'
import GameLandingPage from './game/components/LandingPage'
import TeamLandingPage from './team/components/LandingPage'
import ModulesLandingPage from './module/components/LandingPage'
import AddModule from './module/components/Add'
import QuestionsLandingPage from './question/components/LandingPage'
import AddQuestion from './question/components/Add'
import EventsLandingPage from './event/components/LandingPage'
import AddEvent from './event/components/Add'
import PageNotFound from './error/components/PageNotFound'

export default () => (
  <Router history={history} >
    <Switch>
      <AppRoute exact path='/' component={Homepage} />
      <AppRoute exact path='/about' component={About} />
      <AppRoute exact path='/modules' component={ModulesLandingPage} />
      <AppRoute exact path='/modules/add' component={AddModule} />
      <AppRoute exact path='/questions' component={QuestionsLandingPage} />
      <AppRoute exact path='/questions/add' component={AddQuestion} />
      <AppRoute exact path='/events' component={EventsLandingPage} />
      <AppRoute exact path='/events/add' component={AddEvent} />
      <AppRoute path='/:event_id/:team_name' component={TeamLandingPage} />
      <AppRoute path='/:event_id' component={GameLandingPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
