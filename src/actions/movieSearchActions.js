import actionHelper from './actionHelper';

export const FIND_MOVIE_REQUESTED = 'FIND_MOVIE_REQUESTED';
export const FIND_MOVIE_DONE = 'FIND_MOVIE_DONE';
export const FIND_MOVIE_FAILED = 'FIND_MOVIE_FAILED';

export const findMovieRequested = title => actionHelper(FIND_MOVIE_REQUESTED, { title });
export const findMovieDone = data => actionHelper(FIND_MOVIE_DONE, data);
export const findMovieFailed = error => actionHelper(FIND_MOVIE_FAILED, error);
