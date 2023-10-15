import React, { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import axios from "axios";

interface Manga {
  title: String;
  images: String;
  mal_id: number;
  url: String;
}

interface FetchMangaResponse {
  count: number;
  data: Manga[];
}

const MangaGrid = () => {
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMangaResponse>(
        "https://api.jikan.moe/v4/manga?q=Kaguya-hime&limit=2"
      )
      .then((res) => setMangas(res.data.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {mangas.map((manga) => (
          <li key={manga.mal_id}>{manga.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MangaGrid;
