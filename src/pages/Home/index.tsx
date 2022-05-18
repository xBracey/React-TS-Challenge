import React, { useEffect, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import Cards from "../../components/Molecules/Cards";
import SearchBar from "../../components/Atoms/SearchBar";
import { findMovies } from "../../redux/actions/movies";
import { RootState, useAppDispatch } from "../../redux/store";
import _ from "lodash";
import { _resetMovies } from "../../redux/store/movies";

const findMoviesDebounce = _.debounce((appDispatch: any, query: string) => {
  appDispatch(findMovies({ query }));
}, 500);

export const Home = () => {
  const appDispatch = useAppDispatch();

  const movies = useSelector((state: RootState) => state.movies.movies);

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query !== "") {
      findMoviesDebounce(appDispatch, query);
    }
  }, [query]);

  useEffect(() => {
    appDispatch(_resetMovies());
  }, []);

  return (
    <div>
      <div>
        <SearchBar
          text={query}
          setText={setQuery}
          placeholder="Search for a movie"
        />

        <Cards movies={movies} />
      </div>
    </div>
  );
};

export default Home;
