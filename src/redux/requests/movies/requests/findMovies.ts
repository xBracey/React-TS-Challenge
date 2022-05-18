import axios from "axios";
import { IFilters } from "../../../../types/filters";
import { IMovie, MapToMovie } from "../../../../types/movies";

export const findMovies = async (
  filters: IFilters
): Promise<{ movies: IMovie[]; page: number; errors?: string[] }> => {
  const { year, query } = filters;

  const urlParametersArray = [
    ["api_key", process.env.APP_MOVIEDB_API_KEY ?? ""],
  ];

  if (year !== undefined) urlParametersArray.push(["year", year.toString()]);
  if (query !== undefined) urlParametersArray.push(["query", query]);

  const urlParameters = new URLSearchParams(urlParametersArray);

  const response = await axios.get(
    `${process.env.APP_MOVIEDB_API}search/movie?${urlParameters.toString()}`
  );

  if (response.status !== 200) {
    return { movies: [], page: -1, errors: response.data.errors };
  }

  return {
    movies: response.data.results.map((movie: any) => MapToMovie(movie)),
    page: response.data.page,
  };
};
