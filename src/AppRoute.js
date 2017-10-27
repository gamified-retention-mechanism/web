import React from 'react'
import { Route } from 'react-router'
import App from './layout/App'


const AppRoute = ({ component: Component, ...remainingProps }) => (
  <Route {...remainingProps} render={ props =>
    <App>
      <Component {...props} />
    </App>
  }/>
)

export default AppRoute
