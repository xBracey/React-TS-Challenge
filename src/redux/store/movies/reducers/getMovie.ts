import { APIStatus, IReducer } from "../../type";
import { getMovie } from "../../../actions/movies";
import { Movies } from "../types";

export const getMovieReducer: IReducer<Movies, typeof getMovie> = {
  pending: (state) => {
    state.getMovie.apiStatus = APIStatus.LOADING;
    state.getMovie.errors = [];
  },
  rejected: (state) => {
    state.getMovie.apiStatus = APIStatus.FAILURE;
  },
  fulfilled: (state, action) => {
    const { movie, errors } = action.payload;

    if (errors) {
      state.getMovie.errors = errors;
      return;
    }

    if (!movie) return;

    state.getMovie.apiStatus = APIStatus.SUCCEEDED;

    const movieIndex = state.movies.findIndex(
      (currentMovie) => currentMovie.id === movie.id
    );

    if (movieIndex === -1) {
      state.movies.push(movie);
    }

    state.movies[movieIndex] = movie;
  },
};
