import React from "react";

import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={s.nav}>
      <NavLink exact className={s.link} activeClassName={s.active} to="/">
        Home
      </NavLink>

      <NavLink className={s.link} activeClassName={s.active} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
}

export default NavBar;
