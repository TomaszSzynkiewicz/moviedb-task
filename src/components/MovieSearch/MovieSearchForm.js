import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import './MovieSearchForm.css';

class MovieSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.findMovie = ({ title }) => props.history.push(`/movie/search/${title}`);
  }

  render() {
    const { handleSubmit, loading } = this.props;
    return (
      <div className="container text-center">
        <h1>MovieSearch</h1>
        <form
          onSubmit={handleSubmit(this.findMovie)}
          className="movie-search-form"
        >
          <Field
            name="title"
            placeholder="type title here..."
            type="text"
            component="input"
          />
          <button
            className="btn btn-search"
            type="submit"
            disabled={loading}
          />
        </form>
      </div>
    );
  }
}

MovieSearchForm.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'movieSearchForm'
})(connect(
  state => ({
    loading: state.movieSearch.loading
  })
)(MovieSearchForm));

