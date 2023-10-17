import axios from "axios";
import { useEffect, useState } from "react";
export interface Manga {
  title: string;
  images?: string;
  mal_id?: number;
  url?: string;
  genre?: string;
}
interface Props {
  selectedManga: Manga;
}

const useData = (title: string) => {
  interface FetchMangaResponse {
    count: number;
    data: Manga[];
  }
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMangaResponse>(
        `https://api.jikan.moe/v4/manga?q=${title}&genres=2`
      )
      .then((res) => setMangas(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return { mangas, error };
};

export default useData;
