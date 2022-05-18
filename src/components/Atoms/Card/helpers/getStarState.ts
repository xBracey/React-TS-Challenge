import { StarState } from "../../Star";

export const getStarState = (rating: number, index: number): StarState => {
  if (rating - 1 >= index) return StarState.Full;

  if (rating > index) return StarState.Half;

  return StarState.Empty;
};
