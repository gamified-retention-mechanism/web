import React from 'react'
import { Route } from 'react-router'


const AppRoute = ({ component: Component, ...remainingProps }) => (
  <Route {...remainingProps} render={ props =>
    <Component {...props} />
  }/>
)

export default AppRoute
