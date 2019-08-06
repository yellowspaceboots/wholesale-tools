import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import RequestLog from './RequestLog'
import Request from './Request'
import MaterialStatus from './MaterialStatus'
import EndOfMonth from './EndOfMonth'

const AppRouter = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(props) => <Dashboard {...props} title='Home' />}
      />
      <Route
        exact
        path='/commercial-projects/request-log'
        render={(props) => <RequestLog {...props} title='Request Log' />}
      />
      <Route
        exact
        path='/commercial-projects/request-log/:id'
        render={(props) => <Request {...props} title='Request' />}
      />
      <Route
        exact
        path='/commercial-projects/material-status'
        render={(props) => <MaterialStatus {...props} title='Material Status Management' />}
      />
      <Route
        exact
        path='/accounting/end-of-month'
        render={(props) => <EndOfMonth {...props} title='End of Month' />}
      />
    </Switch>
  )
}

export default AppRouter
