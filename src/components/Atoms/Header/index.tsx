import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/fxdigitallogo.png";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <div className={styles.HeaderInnerContainer}>
        <nav>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
