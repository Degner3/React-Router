import { useEffect } from "react";
import style from "./Nav.module.scss";
import { Link } from "react-router-dom";

export const Nav = () => {
  useEffect(() => {
    console.log("Navigation Component has Mounted");
    return () => {
      console.log("Navigation Component has Un-Mounted");
    };
  }, []);

  return (
    <nav className={style.nav}>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};