import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.css';
import MovieListItem from './MovieListItem';

const MovieList = ({
  list
}) => (
  <div>
    {list.map(item => <MovieListItem key={item.id} item={item} />)}
  </div>
);

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

MovieList.defaultProps = {
  list: []
};

export default MovieList;
