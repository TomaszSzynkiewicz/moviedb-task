import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NoMatch from './Helpers/NoMatch';
import MovieSearchForm from './MovieSearch/MovieSearchForm';
import MovieSearchResults from './MovieSearch/MovieSearchResults';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={MovieSearchForm} />
    <Route path="/movie/search/:title" component={MovieSearchResults} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
