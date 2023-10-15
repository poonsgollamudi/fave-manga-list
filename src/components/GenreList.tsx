import React from "react";
import useGenre from "../hooks/useGenres";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.mal_id}>{genre.genres[0].name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
