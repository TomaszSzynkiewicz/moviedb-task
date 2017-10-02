import React from 'react';
import PropTypes from 'prop-types';

import './MoviesList.css';

import VoteResult from '../Helpers/VoteResult';

const MovieListItem = ({
  item
}) => (
  <div className="movies-list-item">
    {item.poster_path && <img className="poster" src={`http://image.tmdb.org/t/p/w154${item.poster_path}`} alt={item.original_title} />}
    <div className="item-content">
      <h2 className="movie-title">{item.original_title}</h2>
      <span className="release-date">release date: {item.release_date}</span>
      <VoteResult
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
      />
      <p className="movie-overview">{item.overview}</p>
    </div>
  </div>
);

MovieListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    vote_count: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired
  }).isRequired
};

export default MovieListItem;
