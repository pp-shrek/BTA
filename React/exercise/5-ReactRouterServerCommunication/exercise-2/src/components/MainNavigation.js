import { Link } from "react-router-dom";

import classes from "../style/MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/links">Links</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
