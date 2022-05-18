import React, { useMemo } from "react";
import { IMovie } from "../../../types/movies";
import Card from "../../Atoms/Card";
import styles from "./index.module.scss";

interface ICards {
  movies: IMovie[];
}

const Cards = ({ movies }: ICards) => {
  // Using useMemo is more performant than sorting the array on each render
  const sortedMovies = useMemo(
    () => [...movies].sort((m1, m2) => m1.title.localeCompare(m2.title)),
    [movies]
  );

  const moviesComponent = sortedMovies.map((movie) => (
    <Card movie={movie} key={movie.id} />
  ));

  return <div className={styles.CardsContainer}>{moviesComponent}</div>;
};

export default Cards;
