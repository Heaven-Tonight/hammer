import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import ClientsList from './clients-list';

const Clients = props => {
  const { match } = props
  return (
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/clients-list`} />
      <Route path={`${match.url}/clients-list`} component={ClientsList} />
    </Switch>
  )
};

export default Clients;
