import { APIStatus, IReducer } from "../../type";
import { Movies } from "..";
import { findMovies } from "../../../actions/movies";

export const findMoviesReducer: IReducer<Movies, typeof findMovies> = {
  pending: (state) => {
    state.findMovies.apiStatus = APIStatus.LOADING;
    state.findMovies.errors = [];
  },
  rejected: (state) => {
    state.findMovies.apiStatus = APIStatus.FAILURE;
  },
  fulfilled: (state, action) => {
    const { movies, errors, page } = action.payload;

    if (errors) {
      state.findMovies.errors = errors;
      return;
    }

    state.findMovies.apiStatus = APIStatus.SUCCEEDED;
    state.movies = movies.map((movie) => ({
      ...movie,
      revenue: "",
      hasFullyLoaded: false,
    }));
    state.page = page;
  },
};
