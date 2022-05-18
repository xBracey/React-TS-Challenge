import React from "react";
import { Link } from "react-router-dom";
import { IMovie } from "../../../types/movies";
import Stars from "../../Molecules/Stars";
import Star from "../Star";
import { getStarState } from "./helpers/getStarState";
import styles from "./index.module.scss";

interface ICard {
  movie: IMovie;
}

const Card = ({ movie }: ICard) => {
  return (
    <Link className={styles.CardContainer} to={`/movie/${movie.id}`}>
      <h3>{movie.title}</h3>

      <div className={styles.MovieRating}>
        <Stars voteAverage={movie.voteAverage} />
        <p className={styles.VoteAverage}>{movie.voteAverage} / 10</p>
      </div>
    </Link>
  );
};

export default Card;
