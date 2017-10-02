import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from './Helpers/NoMatch';

const Routes = () => (
  <Switch>
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
