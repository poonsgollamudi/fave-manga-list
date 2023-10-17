import axios from "axios";
import { useEffect, useState } from "react";
import titles from "../data/data";
import Manga from "./mangaInf";

interface Props {
  selectedManga: Manga;
}

const useMangas = () => {
  interface FetchMangaResponse {
    count: number;
    data: Manga[];
  }
  const [mangas, setMangas] = useState<Manga[]>([]);
  const [error, setError] = useState("");

  var genres2 = new Array<string>();
  var genres = new Array<string>();

  for (let key in titles) {
    useEffect(() => {
      axios
        .get<FetchMangaResponse>(
          `https://api.jikan.moe/v4/manga?q=${titles[key].manga}&limit=1`
        )
        .then((res) => setMangas((prevState) => [...prevState, res.data.data]))
        .catch((err) => setError(err.message));
    }, []);
  }
  console.log(mangas);
  for (let i = 0; i < mangas.length; i++) {
    var mangaT = new Object();
    mangaT = mangas[i];
    genres2.push(mangaT[0].genres[0].name);
  }
  genres = [...new Set(genres2)];

  var mangaObj = {
    mangasList: [],
  };
  mangaObj.mangasList.push(mangas);
  var json = JSON.stringify(mangaObj);

  return { mangas, genres, error };
};

export default useMangas;
