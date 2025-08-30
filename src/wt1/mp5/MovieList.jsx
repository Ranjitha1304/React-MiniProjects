
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movies = [
    {
      id: 1,
      title: "Inception",
      rating: 5,
      isTrending: true,
      poster: "https://via.placeholder.com/200x300?text=Inception",
    },
    {
      id: 2,
      title: "Interstellar",
      rating: 4,
      isTrending: false,
      poster: "https://via.placeholder.com/200x300?text=Interstellar",
    },
    {
      id: 3,
      title: "The Dark Knight",
      rating: 5,
      isTrending: true,
      poster: "https://via.placeholder.com/200x300?text=Dark+Knight",
    },
  ];

  return (
    <div>
      <h1>🎥 Movie Recommendations</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            isTrending={movie.isTrending}
            poster={movie.poster}
            // ✅ Passing JSX as prop
            footer={<button className="watch-btn">Watch Now</button>}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
