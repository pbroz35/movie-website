

const NavBar = ({data, setData}) => {
    
    const fetchMovies = () =>{

    console.log("Getting top movies");
    
    const apiServer = "http://localhost:3500";
    fetch(`${apiServer}/get-top-movies`).then((res) => res.json()).then((data) => {
      console.log("Value", data);

      setData(data.results);

    });
    
        
    }
    
    return (
      
        <nav className="nav">
        <a href="/" className="site-title">Best Movie Website</a>
        <ul>
            <li>
                <button className="button" onClick={()=>fetchMovies()}>Top-Movies</button>
             </li> 


             <li>

                <button className="button">Search</button>

            </li>

        </ul>

    </nav>

    )
}

export default NavBar
