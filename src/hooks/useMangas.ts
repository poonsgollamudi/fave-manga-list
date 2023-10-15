import axios from "axios";
import { useEffect, useState } from "react";

const useMangas = () => {
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
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMangaResponse>(
        "https://api.jikan.moe/v4/manga?q=Kaguya-hime&limit=2"
      )
      .then((res) => setMangas(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return { mangas, error };
};

export default useMangas;
