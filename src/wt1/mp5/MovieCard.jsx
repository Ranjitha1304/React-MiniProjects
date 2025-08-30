import React from "react";
import "./MovieCard.css";

const MovieCard = ({ title, rating, isTrending, poster, footer }) => {
  // ⭐ Convert rating (number) into stars using JSX Expression
  const stars = "⭐".repeat(rating);

  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <h3>
        {title}{" "}
        {/* 🔥 Show Trending Badge if true */}
        {isTrending && <span className="trending">🔥</span>}
      </h3>
      <p>{stars}</p>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default MovieCard;
