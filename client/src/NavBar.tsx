const NavBar = ({ data, setData }) => {
  
  
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
          <form>
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
