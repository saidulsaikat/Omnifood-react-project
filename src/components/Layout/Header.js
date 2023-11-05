import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/omnifood-logo.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="Omnifood logo" className={classes.logo} />
      <nav className={classes["main-nav"]}>
        <ul className={classes["main-nav-list"]}>
          <li><a className={classes["main-nav-link"]} href="#">Section 1</a></li>
          <li><a className={classes["main-nav-link"]} href="#">Section 2</a></li>
          <li><a className={classes["main-nav-link"]} href="#">Section 3</a></li>
          <li><a className={classes["main-nav-link"]} href="#">Section 4</a></li>
          <li><HeaderCartButton /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
