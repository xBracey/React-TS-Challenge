export interface IMovie {
  id: number;
  title: string;
  overview: string;
  voteAverage: number;
  voteCount: number;
}

export interface IFullMovie extends IMovie {
  hasFullyLoaded: boolean;
  revenue: string;
  imdbId?: string;
  runtime?: number;
}

export const MapToMovie = (movie: any): IMovie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  voteAverage: movie.vote_average,
  voteCount: movie.vote_count,
});

export const MapToFullMovie = (movie: any): IFullMovie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  voteAverage: movie.vote_average,
  voteCount: movie.vote_count,
  revenue: movie.revenue,
  imdbId: movie.imdb_id,
  runtime: movie.runtime,
  hasFullyLoaded: true,
});
