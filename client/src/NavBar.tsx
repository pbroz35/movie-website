import { useState } from "react";

const NavBar = ({ data, setData, search, setSearch }) => {
  const fetchMovies = () => {
    console.log("Getting top movies");

    const apiServer = "http://localhost:3500";

    fetch(`${apiServer}/get-top-movies`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Value", data);

        setData(data.results);
      });
  };

  const updateSearch = (e) => {
    
    setSearch(e.target.value);
    console.log("set search");
  };

  const fetchSearch = () => {

    console.log("Getting results for :", search);

    

  }

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Best Movie Website
      </a>
      <ul>
        <li>
          <button
            className="button"
            onClick={() => {
              if (data.length === 0) {
                fetchMovies();
              } else {
                setData([]);
              }
            }}
          >
            Top-Movies
          </button>
        </li>

        <li>
          <form
            onChange={(e) => {
              e.preventDefault();
              updateSearch(e);
            }}
            
            onSubmit={(e) => {e.preventDefault(); fetchSearch()}}
          >
            <label htmlFor="searchInput"></label>
            <input
              type="text"
              id="searchInput"
              name="search"
              placeholder="Enter movie title..."
            />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
