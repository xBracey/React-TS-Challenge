import { IFullMovie } from "../../../types/movies";
import { APIStatus } from "../type";

export interface Movies {
  findMovies: {
    apiStatus: APIStatus;
    errors?: string[];
  };
  getMovie: {
    apiStatus: APIStatus;
    errors?: string[];
  };
  movies: IFullMovie[];
  page: number;
}
