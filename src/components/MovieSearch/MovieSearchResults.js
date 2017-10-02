import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { findMovieRequested } from '../../actions';
import './MovieSearchResults.css';
import Loader from '../Helpers/Loader';
import MoviesList from '../MoviesList/MoviesList';

class MovieSearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.findMovie = props.findMovie.bind(this);
  }

  componentDidMount() {
    const title = this.props.match.params.title;
    if (title) {
      this.findMovie({ title });
    }
  }

  render() {
    const {
      loading,
      title,
      list,
      error
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="container">
        <div className="movie-search-results-details">
          <h1>Search results for: <strong>{title}</strong></h1>
        </div>
        {error.length > 0 && <p className="error">{error}</p>}
        <div className="movie-search-results">
          {list.length > 0 && <MoviesList list={list} />}
          {list.length === 0 && <p>Nothing found.</p>}
        </div>
      </div>
    );
  }
}

MovieSearchResults.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  findMovie: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string.isRequired
};

export default connect(
  state => ({
    loading: state.movieSearch.loading,
    title: state.movieSearch.title,
    list: state.movieSearch.results,
    error: state.movieSearch.error
  }),
  dispatch => ({
    findMovie: ({ title }) => dispatch(findMovieRequested(title))
  })
)(MovieSearchResults);
