import axios from "axios";
import { IFullMovie, MapToFullMovie } from "../../../../types/movies";

export const getMovie = async (
  id: string
): Promise<{ movie?: IFullMovie; errors?: string[] }> => {
  const urlParametersArray = [
    ["api_key", process.env.APP_MOVIEDB_API_KEY ?? ""],
  ];

  const urlParameters = new URLSearchParams(urlParametersArray);

  const response = await axios.get(
    `${process.env.APP_MOVIEDB_API}movie/${id}?${urlParameters.toString()}`
  );

  if (response.status !== 200) {
    return { errors: response.data.errors };
  }

  return {
    movie: MapToFullMovie(response.data),
  };
};
