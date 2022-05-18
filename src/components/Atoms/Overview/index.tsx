import React from "react";
import { IFullMovie } from "../../../types/movies";
import Stars from "../../Molecules/Stars";
import styles from "./index.module.scss";
import imdbImage from "../../../assets/imdb.png";

interface IOverview {
  movie: IFullMovie;
}

const Overview = ({ movie }: IOverview) => {
  const { title, overview, voteAverage, imdbId, voteCount } = movie;

  return (
    <div className={styles.OverviewCard}>
      <h1>{title}</h1>
      <p>{overview}</p>

      <div className={styles.StarsContainer}>
        <Stars voteAverage={voteAverage} />
      </div>

      <p>{`${voteAverage}/10 - ${voteCount} votes`}</p>

      {imdbId && (
        <a
          className={styles.ImdbLink}
          href={`https://www.imdb.com/title/${imdbId}/`}
          rel="noreferrer"
          target="_blank"
        >
          <img src={imdbImage} alt="Imdb Logo" />
        </a>
      )}
    </div>
  );
};

export default Overview;
