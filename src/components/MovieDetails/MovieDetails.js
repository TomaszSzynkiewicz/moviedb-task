import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { getMovieDetailsRequested } from '../../actions';
import './MovieDetails.css';
import Loader from '../Helpers/Loader';
import VoteResult from '../Helpers/VoteResult';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.getDetails = props.getDetails.bind(this);
  }

  componentDidMount() {
    this.getDetails(this.props.match.params.movieId);
  }

  renderGenres() {
    const {
      movie: { genres }
    } = this.props;

    if (!genres) {
      return null;
    }

    return genres.map(genre => (
      <span className="genre" key={genre.id}> {genre.name} </span>
    ));
  }

  renderMovieDetails() {
    const { movie } = this.props;

    return (
      <div className="movie-details">
        <h1 className="movie-details-title">{movie.title}</h1>
        <VoteResult
          voteAverage={movie.voteAverage}
          voteCount={movie.voteCount}
        />
        <span className="movie-details-release-date">release date: {movie.releaseDate}</span>
        <div className="movie-details-content">
          {movie.posterPath && <img className="movie-details-poster" src={`http://image.tmdb.org/t/p/w154${movie.posterPath}`} alt={movie.title} />}
          <p>{movie.overview}</p>
          <div className="movie-details-genres">
            {this.renderGenres(movie.genres)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      loading,
      error,
      movie
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        {movie && this.renderMovieDetails()}
        {error.length > 0 && <p className="error">{error}</p>}
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  getDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  movie: PropTypes.shape({
    genres: PropTypes.array,
    overview: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired
  })
};

MovieDetails.defaultProps = {
  movie: null,
  error: ''
};

export default connect(
  state => ({
    loading: state.movie.loading,
    movie: state.movie.movie
  }),
  dispatch => ({
    getDetails: movieId => dispatch(getMovieDetailsRequested(movieId))
  })
)(MovieDetails);
