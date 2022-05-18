import React, { ChangeEvent } from "react";
import styles from "./index.module.scss";

interface ISearchBar {
  text: string;
  setText: (text: string) => void;
  placeholder?: string;
}

const SearchBar = ({ text, setText, placeholder = "" }: ISearchBar) => {
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className={styles.SearchBarContainer}>
      <input
        className={styles.Input}
        onChange={onInputChange}
        value={text}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
