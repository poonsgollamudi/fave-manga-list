import axios from "axios";
import { useEffect, useState } from "react";
import useMangas, { Manga } from "./useMangas";

export interface Genre {
  type: string;
  mal_id?: number;
  manga?: string;
}

interface FetchMGenreResponse {
  count: number;
  data: Genre[];
}

const useGenres = (title: string) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMGenreResponse>(`https://api.jikan.moe/v4/manga?genres=2`)
      .then((res) => setGenres(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return { genres, error };
};
export default useGenres;
