import Manga from "./mangaInf";
import mangaTitles from "../data/data";
import getDataFunc from "../services/api-client";
let mangaL: Manga[] = [];
let genres = new Array<string>();
let genres2 = new Array<string>();

for (let key in mangaTitles) {
  console.log(mangaTitles[key].id);
  let { mangas } = await getDataFunc(mangaTitles[key].id);
  mangaL.push(mangas.data);
  genres2.push(mangas.data.genres[0].name);
}
genres = [...new Set(genres2)];

console.log(mangaL);
console.log(genres);

export default { mangaL, genres };
