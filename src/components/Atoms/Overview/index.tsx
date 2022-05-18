import React from "react";
import { IFullMovie } from "../../../types/movies";
import Stars from "../../Molecules/Stars";
import styles from "./index.module.scss";

interface IOverview {
  movie: IFullMovie;
}

const Overview = ({ movie }: IOverview) => {
  return (
    <div className={styles.OverviewCard}>
      <h1>{movie.title}</h1>
      <div className={styles.StarsContainer}>
        <Stars voteAverage={movie.voteAverage} />
      </div>
    </div>
  );
};

export default Overview;
