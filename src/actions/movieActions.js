import actionHelper from './actionHelper';

export const GET_MOVIE_DETAILS_REQUESTED = 'GET_MOVIE_DETAILS_REQUESTED';
export const GET_MOVIE_DETAILS_DONE = 'GET_MOVIE_DETAILS_DONE';
export const GET_MOVIE_DETAILS_FAILED = 'GET_MOVIE_DETAILS_FAILED';

export const getMovieDetailsRequested = id => actionHelper(GET_MOVIE_DETAILS_REQUESTED, { id });
export const getMovieDetailsDone = data => actionHelper(GET_MOVIE_DETAILS_DONE, data);
export const getMovieDetailsFailed = error => actionHelper(GET_MOVIE_DETAILS_FAILED, error);
