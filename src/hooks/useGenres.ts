import axios from "axios";
import { useEffect, useState } from "react";

export interface Genre {
  type: string;
  mal_id: number;
}

interface FetchMGenreResponse {
  count: number;
  data: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<FetchMGenreResponse>(
        "https://api.jikan.moe/v4/manga?q=Kaguya-hime&limit=3"
      )
      .then((res) => setGenres(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return { genres, error };
};
export default useGenres;
