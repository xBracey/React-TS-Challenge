import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Overview from "../../components/Atoms/Overview";
import { getMovie } from "../../redux/actions/movies";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./index.module.scss";

export const Movie = () => {
  const appDispatch = useAppDispatch();

  const { id } = useParams();

  const movies = useSelector((state: RootState) => state.movies.movies);
  const movie = movies.find(
    (movieToFind) => id && movieToFind.id === parseInt(id, 10)
  );

  useEffect(() => {
    if (id) appDispatch(getMovie(id));
  }, [id]);

  if (movie === undefined) {
    return (
      <div className={styles.MovieOverviewContainer}>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className={styles.MovieOverviewContainer}>
      <Overview movie={movie} />
    </div>
  );
};

export default Movie;
