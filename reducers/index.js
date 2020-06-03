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
import selectedItem , * as selectedSelector from './selectedItem';
import searchMovies, * as searchMoviesSelectors from './searchMovies';
import searchVideogames, * as searchVideogamesSelectors from './searchVideogames';
import searchSeries, * as searchSeriesSelectors from './searchSeries';
import selectedCategory, * as selectedCategorySelectors from './selectedCategory';

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
  searchSeries,
  searchMovies,
  searchVideogames,
  selectedCategory,
});

export default reducer;
// selected item selector
export const getSelectedItem = state => selectedSelector.getSelectedItem(state.selectedItem)

// selected category selector
export const getSelectedCategory = state => selectedCategorySelectors.getSelectedCategory(state.selectedCategory);

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

// movie actors selectors
export const getMovieActor = (state , id) => actorsSelectors.getMovieActor(state.actors , id);
export const getMovieActors = (state) => actorsSelectors.getMovieActors(state.actors);
export const getIsFetchingMovieActor = (state) => actorsSelectors.getIsFetchingMovieActor(state.actors);
export const getMovieActorError = (state) => actorsSelectors.getMovieActorError(state.actors);

// serie actors selectors
export const getSerieActor = (state, id) => actorsSelectors.getSerieActor(state.actors, id);
export const getSerieActors = (state) => actorsSelectors.getSerieActors(state.actors);
export const getIsFetchingSerieActor = (state) => actorsSelectors.getIsFetchingSerieActor(state.actors);
export const getSerieActorError = (state) => actorsSelectors.getSerieActorError(state.actors);

// movie awards selectors
export const getMovieAward = (state, id) => awardsSelectors.getMovieAward(state.awards, id);
export const getMovieAwards = state => awardsSelectors.getMovieAwards(state.awards);
export const isFetchingMovieAwards = state => awardsSelectors.isFetchingMovieAwards(state.awards);
export const getMovieAwardError = state => awardsSelectors.getMovieAwardError(state.awards);

// serie awards selectors
export const getSerieAward = (state, id) => awardsSelectors.getSerieAward(state.awards, id);
export const getSerieAwards = state => awardsSelectors.getSerieAwards(state.awards);
export const isFetchingSerieAwards = state => awardsSelectors.isFetchingSerieAwards(state.awards);
export const getSerieAwardError = state => awardsSelectors.getSerieAwardError(state.awards);

// movie producers selectors
export const getMovieProducer = (state, id) => movieProducersSelectors.getMovieProducer(state.movieProducers, id);
export const getMovieProducers = state => movieProducersSelectors.getMovieProducers(state.movieProducers);
export const isFetchingMovieProducers = state => movieProducersSelectors.isFetchingMovieProducers(state.movieProducers);
export const getMovieProducerError = state => movieProducersSelectors.getMovieProducerError(state.movieProducers);

// movies comments selectors 
export const getMovieComment = (state , id) => commentsSelectors.getMovieComment(state.comments , id);
export const getMovieComments = state => commentsSelectors.getMovieComments(state.comments);
export const isFetchingMovieComments = state => commentsSelectors.isFetchingMovieComments(state.comments);
export const getCommentError = state => commentsSelectors.getMovieCommentError(state.comments);

// series comments selectors
export const getSerieComment = (state, id) => commentsSelectors.getSerieComment(state.comments, id);
export const getSerieComments = state => commentsSelectors.getSerieComments(state.comments);
export const isFetchingSerieComments = state => commentsSelectors.isFetchingSerieComments(state.comments);
export const getSerieCommentError = state => commentsSelectors.getSerieCommentError(state.comments);

// videogames comments selectors
export const getGameComment = (state, id) => commentsSelectors.getGameComment(state.comments, id);
export const getGameComments = state => commentsSelectors.getGameComments(state.comments);
export const isFetchingGameComments = state => commentsSelectors.isFetchingGameComments(state.comments);
export const getGameCommentError = state => commentsSelectors.getGameCommentError(state.comments);

// genres selectors
export const getGenre = (state , id) => genresSelectors.getGenre(state.genres , id);
export const getGenres = state => genresSelectors.getGenres(state.genres);
export const isFetchingGenres = state => genresSelectors.isFetchingGenres(state.genres);
export const getGenreError = state => genresSelectors.getGenreError(state.genres);

// search movies
export const getSearchMovie = (state, id) => searchMoviesSelectors.getSearchMovie(state.searchMovies, id);
export const getSearchMovies = state => searchMoviesSelectors.getSearchMovies(state.searchMovies);
export const isFetchingSearchMovies = state => searchMoviesSelectors.isFetchingSearchMovies(state.searchMovies);
export const getSearchMoviesError = state => searchMoviesSelectors.getSearchMoviesError(state.searchMovies);

// search series
export const getSearchSerie = (state, id) => searchSeriesSelectors.getSearchSerie(state.searchSeries, id);
export const getSearchSeries = state => searchSeriesSelectors.getSearchSeries(state.searchSeries);
export const isFetchingSearchSeries = state => searchSeriesSelectors.isFetchingSearchSeries(state.searchSeries);
export const getSearchSeriesError = state => searchSeriesSelectors.getSearchSeriesError(state.searchSeries);

// search videogames
export const getSearchVideogame = (state, id) => searchVideogamesSelectors.getSearchVideogame(state.searchVideogames, id);
export const getSearchVideogames = state => searchVideogamesSelectors.getSearchVideogames(state.searchVideogames);
export const isFetchingSearchVideogames = state => searchVideogamesSelectors.isFetchingSearchVideogames(state.searchVideogames);
export const getSearchVideogamesError = state => searchVideogamesSelectors.getSearchVideogamesError(state.searchVideogames);