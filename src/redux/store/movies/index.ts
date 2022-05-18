import { createSlice } from "@reduxjs/toolkit";
import { findMoviesReducer } from "./reducers/findMovies";
import { APIStatus } from "../type";
import { findMovies, getMovie } from "../../actions/movies";
import { getMovieReducer } from "./reducers/getMovie";
import { Movies } from "./types";

export const moviesInitialState: Movies = {
  findMovies: {
    apiStatus: APIStatus.IDLE,
  },
  getMovie: {
    apiStatus: APIStatus.IDLE,
  },
  movies: [],
  page: -1,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  reducers: {
    _resetMovies: (state: any) => {
      state.movies = [];
    },
  },
  extraReducers: (builder) => {
    // findMovies
    builder.addCase(findMovies.pending, findMoviesReducer.pending);
    builder.addCase(findMovies.rejected, findMoviesReducer.rejected);
    builder.addCase(findMovies.fulfilled, findMoviesReducer.fulfilled);

    // getMovie
    builder.addCase(getMovie.pending, getMovieReducer.pending);
    builder.addCase(getMovie.rejected, getMovieReducer.rejected);
    builder.addCase(getMovie.fulfilled, getMovieReducer.fulfilled);
  },
});

export const { _resetMovies } = moviesSlice.actions;
