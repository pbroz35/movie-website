const CardContainer = ({data}) => {
  return (
    <ul className="popular-movies-text">
      {data
        .filter(movie => movie.backdrop_path) // Filter out movies with null backdrop_path
        .map((movie) => (
          <li key={movie.id} className="movie-item">
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </li>
        ))}
    </ul>
  );
}
export default CardContainer;
