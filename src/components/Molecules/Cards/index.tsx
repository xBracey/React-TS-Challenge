import React from "react";
import { IMovie } from "../../../types/movies";
import Card from "../../Atoms/Card";
import styles from "./index.module.scss";

interface ICards {
  movies: IMovie[];
}

const Cards = ({ movies }: ICards) => {
  const moviesComponent = movies.map((movie) => <Card movie={movie} />);

  return <div className={styles.CardsContainer}>{moviesComponent}</div>;
};

export default Cards;
