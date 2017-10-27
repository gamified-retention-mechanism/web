import React from 'react'
import { Route } from 'react-router'
import Player from './layout/Player'


const PlayerRoute = ({ component: Component, ...remainingProps }) => (
  <Route {...remainingProps} render={ props =>
    <Player>
      <Component {...props} />
    </Player>
  }/>
)

export default PlayerRoute
