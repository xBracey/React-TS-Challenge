import { IFullMovie } from "../types/movies";

export const testMovies: IFullMovie[] = [
  {
    id: 1,
    title: "Se7en",
    overview:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    voteAverage: 8.6,
    voteCount: 1586122,
    revenue: "£6m",
    imdbId: "10",
    runtime: 120,
    hasFullyLoaded: true,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    overview:
      "It is an adaptation of the Stephen King novella Rita Hayworth and Shawshank Redemption.",
    voteAverage: 9.3,
    voteCount: 2586661,
    revenue: "£6m",
    imdbId: "10",
    runtime: 120,
    hasFullyLoaded: true,
  },
];
