import axios from "axios";
import { useEffect, useState } from "react";
import Manga from "../hooks/mangaInf";

interface Props {
  selectedManga: Manga;
}

async function getDataFunc(id: number) {
  interface FetchMangaResponse {
    count: number;
    data: Manga[];
  }

  //let mangas: any[] = [{}];
  let error: string = "";
  var genresName = new Array<string>();
  let genres = [];

  const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
  const mangas = await response.json();
  setTimeout(function () {
    //do what you need here
  }, 2000);

  console.log(mangas);

  return { mangas, error };
}

export default getDataFunc;
