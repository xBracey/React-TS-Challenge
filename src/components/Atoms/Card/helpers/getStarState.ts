import { StarState } from "../../Star";

export const getStarState = (rating: number, index: number): StarState => {
  console.log({ rating, index });

  if (rating - 1 >= index) return StarState.Full;

  if (rating > index) return StarState.Half;

  return StarState.Empty;
};
