import React from 'react'
import { Route } from 'react-router'
import Admin from './layout/Admin'


const AdminRoute = ({ component: Component, ...remainingProps }) => (
  <Route {...remainingProps} render={ props =>
    <Admin>
      <Component {...props} />
    </Admin>
  }/>
)

export default AdminRoute
