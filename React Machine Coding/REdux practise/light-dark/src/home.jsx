// src/components/Home.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./store/themeSlice";
import "./home.css"

const Home = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Apply theme when app loads
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="main">
      <h1 className="heading">
        {theme === "light" ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </h1>
      <button className="btn" onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
