import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import auth, * as authSelectors from './auth';
import signUp, * as signUpSelectors from './signUp';
import movies , * as moviesSelectors from  './movies';
import series , * as seriesSelectors from  './series';
import videogames , * as videogamesSelectors from  './videogames';
import developers, * as developersSelectors from './developers';
import consoles, * as consolesSelectors from './consoles';
import directors, * as directorsSelectors from './directors';
import actors, * as actorsSelectors from './actors';
import awards, * as awardsSelectors from './awards';
import movieProducers, * as movieProducersSelectors from './movieProducers';
import comments, * as commentsSelectors from './comments';
import genres, * as genresSelectors from './genres';
import selectedItem , * as selectedSelector from './selectedItem'
const reducer = combineReducers({
  form : formReducer,
  auth,
  signUp,
  movies,
  series,
  videogames,
  developers,
  consoles,
  directors,
  actors,
  awards,
  comments,
  genres,
  movieProducers,
  selectedItem,
});

export default reducer;
// selected item selector
export const getSelectedItem = state => selectedSelector.getSelectedItem(state.selectedItem)
// auth selectors
export const getToken = state => authSelectors.getToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const isAuthenticated = state => getToken(state) != null;
export const isAuthError = state => getAuthenticatingError(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getIsRefreshingToken = state => authSelectors.getIsRefreshingToken(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);

// signUp selectors
export const getIsSigningUp = state => signUpSelectors.getIsSigningUp(state.signUp);
export const getSignUpError = state => signUpSelectors.getSignUpError(state.signUp);

// movies selectors
export const getMovie = (state, id) => moviesSelectors.getMovie(state.movies, id);
export const getMovies = state => moviesSelectors.getMovies(state.movies);
export const isFetchingMovies = state => moviesSelectors.isFetchingMovies(state.movies);
export const getMovieError = state => moviesSelectors.getMovieError(state.movies);

// series selectors
export const getSerie = (state, id) => seriesSelectors.getSerie(state.series, id);
export const getSeries = state => seriesSelectors.getSeries(state.series);
export const isFetchingSeries = state => seriesSelectors.isFetchingSeries(state.series);
export const getSerieError = state => seriesSelectors.getSerieError(state.series);

// videogames selectors 
export const getVideogame = (state, id) => videogamesSelectors.getVideogame(state.videogames, id);
export const getVideogames = state => videogamesSelectors.getVideogames(state.videogames);
export const isFetchingVideogames = state => videogamesSelectors.isFetchingVideogames(state.videogames);
export const getVideogameError = state => videogamesSelectors.getVideogameError(state.videogames);

// developers selectors
export const getDeveloper = (state, id) => developersSelectors.getDeveloper(state.developers, id);
export const getDevelopers = state => developersSelectors.getDevelopers(state.developers);
export const isFetchingDevelopers = state => developersSelectors.isFetchingDevelopers(state.developers);
export const getDeveloperError = state => developersSelectors.getDeveloperError(state.developers);

// consoles selectors
export const getConsole = (state, id) => consolesSelectors.getConsole(state.consoles, id);
export const getConsoles = state => consolesSelectors.getConsoles(state.consoles);
export const isFetchingConsoles = state => consolesSelectors.isFetchingConsoles(state.consoles);
export const getConsoleError = state => consolesSelectors.getConsoleError(state.consoles);

// directors selectors
export const getDirector = (state, id) => directorsSelectors.getDirector(state.directors, id);
export const getDirectors = state => directorsSelectors.getDirectors(state.directors);
export const isFetchingDirectors = state => directorsSelectors.isFetchingDirectors(state.directors);
export const getDirectorError = state => directorsSelectors.getDirectorError(state.directors);

// actors selectors
export const getActor = (state , id) => actorsSelectors.getActor(state.actors , id);
export const getActors = (state) => actorsSelectors.getActors(state.actors);
export const getIsFetchingActor = (state) => actorsSelectors.getIsFetchingActor(state.actors);
export const getActorError = (state) => actorsSelectors.getActorError(state.actors);

// awards selectors
export const getAward = (state, id) => awardsSelectors.getAward(state.awards, id);
export const getAwards = state => awardsSelectors.getAwards(state.awards);
export const isFetchingAwards = state => awardsSelectors.isFetchingAwards(state.awards);
export const getAwardError = state => awardsSelectors.getAwardError(state.awards);

// movie producers selectors
export const getMovieProducer = (state, id) => movieProducersSelectors.getMovieProducer(state.movieProducers, id);
export const getMovieProducers = state => movieProducersSelectors.getMovieProducers(state.movieProducers);
export const isFetchingMovieProducers = state => movieProducersSelectors.isFetchingMovieProducers(state.movieProducers);
export const getMovieProducerError = state => movieProducersSelectors.getMovieProducerError(state.movieProducers);

// comments selectors 
export const getComment = (state , id) => commentsSelectors.getComment(state.comments , id);
export const getComments = state => commentsSelectors.getComments(state.comments);
export const isFetchingComments = state => commentsSelectors.isFetchingComments(state.comments);
export const getCommentError = state => commentsSelectors.getCommentError(state.comments);

// genres selectors
export const getGenre = (state , id) => genresSelectors.getGenre(state.genres , id);
export const getGenres = state => genresSelectors.getGenres(state.genres);
export const isFetchingGenres = state => genresSelectors.isFetchingGenres(state.genres);
export const getGenreError = state => genresSelectors.getGenreError(state.genres);