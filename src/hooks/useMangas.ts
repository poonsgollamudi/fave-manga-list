import axios from "axios";
import { useEffect, useState } from "react";
import Manga from "./mangaInf";

interface Props {
  selectedManga: Manga;
}

const useMangas = (id: number) => {
  interface FetchMangaResponse {
    count: number;
    data: Manga[];
  }

  let [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  var genres = new Array<string>();
  useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v4/manga/${id}`)
      .then((res) => setMangas(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  //console.log(mangas);

  //genres = mangas[0].genres[0].name;
  genres = [];

  return { mangas, genres, error };
};

export default useMangas;
