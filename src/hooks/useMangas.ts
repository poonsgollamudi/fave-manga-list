import axios from "axios";
import { useEffect, useState } from "react";
import Manga from "./mangaInf";

interface Props {
  selectedManga: Manga;
}

const useMangas = (titleOfManga: string) => {
  interface FetchMangaResponse {
    count: number;
    data: Manga[];
  }
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  var genres2 = new Array<string>();
  var genres = new Array<string>();
  console.log(titleOfManga);

  axios
    .get<FetchMangaResponse>(
      `https://api.jikan.moe/v4/manga?q=${titleOfManga}&limit=1`
    )
    .then((res) => setMangas(res.data.data))
    .catch((err) => setError(err.message));

  useEffect(() => {
    axios
      .get<FetchMangaResponse>(
        `https://api.jikan.moe/v4/manga?q=${titleOfManga}&limit=1`
      )
      .then((res) => setMangas(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  console.log("manga is " + mangas);

  for (let i = 0; i < mangas.length; i++) {
    var mangaT = new Object();
    mangaT = mangas[i];
    genres2.push(mangaT[0].genres[0].name);
  }
  genres = [...new Set(genres2)];

  return { mangas, genres, error };
};

export default useMangas;
