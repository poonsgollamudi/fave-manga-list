import { SimpleGrid, Text } from "@chakra-ui/react";
import useMangas from "../hooks/useMangas";
import MangaCard from "./MangaCard";
import { v4 as uuidv4 } from "uuid";
import titles from "../data/data";

interface Props {
  onMangaDisplayed: (genre: string) => void;
  genreSelectedGrid: string;
}
let mangasList = new Array<string>();

const MangaGrid = ({ genreSelectedGrid }: Props) => {
  for (let key in titles) {
    let title = titles[key].manga;
    let { mangas } = useMangas(title);
    console.log(mangas);
    mangasList.push(mangas);
  }
  console.log(mangasList);
  return (
    <>
      {/* <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
        key={uuidv4()}
      >
        {mangas.map((manga) => (
          <MangaCard
            manga={manga}
            key={uuidv4()}
            genreSelect={genreSelectedGrid}
          ></MangaCard>
        ))}
      </SimpleGrid> */}
    </>
  );
};

export default MangaGrid;
