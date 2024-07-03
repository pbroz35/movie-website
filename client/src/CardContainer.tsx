const CardContainer = ({data}) => {
    return (
        
        <ul className="popular-movies-text">
        {data.map((movie) => 
        (
          <li key={movie.id}>

            {movie.title}
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />

          </li>
        ))}
      </ul>

    )
}

export default CardContainer
