import React from 'react';
import PropTypes from 'prop-types';
import './VoteResult.css';

const VoteResult = ({
  voteAverage,
  voteCount
}) => {
  const renderVotes = (average) => {
    const newAverage = average < 1000 ? average : `${(average / 1000).toFixed(1)}K`;
    return newAverage;
  };

  return (
    <div className="movie-rate">
      <span className="rate" title="Average">{voteAverage}</span>
      <span className="votes" title="Votes">{renderVotes(voteCount)}</span>
    </div>
  );
};

VoteResult.propTypes = {
  voteAverage: PropTypes.number.isRequired,
  voteCount: PropTypes.number.isRequired
};

export default VoteResult;
