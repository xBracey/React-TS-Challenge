import React from "react";
import { getStarState } from "../../Atoms/Card/helpers/getStarState";
import Star from "../../Atoms/Star";
import styles from "./index.module.scss";

interface IStars {
  voteAverage: number;
}

const Stars = ({ voteAverage }: IStars) => {
  const rating = Math.round(voteAverage) / 2;

  const starsComponent = Array(5)
    .fill(0)
    .map((_, index) => (
      <Star
        className={styles.Star}
        state={getStarState(rating, index)}
        key={index}
      />
    ));

  return <>{starsComponent}</>;
};

export default Stars;
