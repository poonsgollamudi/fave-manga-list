import axios from "axios";

const mangaURL = "https://api.jikan.moe/v4/manga";

export default axios.create({
  method: "GET",
  //url: `${mangaURL}`,
});

//console.log(resp.data.data.map((manga: any) => manga.title));
