import React from 'react'
import { Route, Router, Switch } from 'react-router-dom'
import history from './history'
import AppRoute from './AppRoute'
import AdminRoute from './AdminRoute'
import PlayerRoute from './PlayerRoute'
import Homepage from './Homepage'
import About from './About'
import GameLandingPage from './game/components/LandingPage'
import TeamLandingPage from './team/components/LandingPage'
import TeamLobby from './team/components/Lobby'
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
      <AppRoute path='/about' component={About} />
      <AdminRoute path='/admin/modules' component={ModulesLandingPage} />
      <AdminRoute path='/admin/modules/add' component={AddModule} />
      <AdminRoute path='/admin/questions' component={QuestionsLandingPage} />
      <AdminRoute path='/admin/questions/add' component={AddQuestion} />
      <AdminRoute path='/admin/events' component={EventsLandingPage} />
      <AdminRoute path='/admin/events/add' component={AddEvent} />
      <PlayerRoute path='/:event_id/:team_name/lobby' component={TeamLobby} />
      <PlayerRoute path='/:event_id/:team_name' component={TeamLandingPage} />
      <PlayerRoute path='/:event_id' component={GameLandingPage} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)
