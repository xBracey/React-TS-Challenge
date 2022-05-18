import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilters } from "../../types/filters";
import { MoviesAPI } from "../requests/movies";

export const findMovies = createAsyncThunk(
  "movie/find",
  async (filters: IFilters) => {
    return MoviesAPI.findMovies(filters);
  }
);

export const getMovie = createAsyncThunk("movie/get", async (id: string) => {
  return MoviesAPI.getMovie(id);
});
