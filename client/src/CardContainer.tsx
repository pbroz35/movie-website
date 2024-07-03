const CardContainer = ({data}) => {
    return (
        
        <ul className="popular-movies-text">
        {data.map((movie) => 
        (
          <li key={movie.id}>

            {movie.title}
            
          </li>
        ))}
      </ul>

    )
}

export default CardContainer
