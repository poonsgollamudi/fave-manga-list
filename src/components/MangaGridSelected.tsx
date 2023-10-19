import { SimpleGrid, Text } from "@chakra-ui/react";
import MangaCard from "./MangaCard";
import mangaL from "../hooks/getData";
import { v4 as uuidv4 } from "uuid";

interface Props {
  genreSelectedGrid: string;
}

const MangaGrid = ({ genreSelectedGrid }: Props) => {
  let mangaList = mangaL.mangaL;

  return (
    <>
      <SimpleGrid
        key={uuidv4()}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {mangaList.map((manga: any, index) =>
          manga.genres[0].name === genreSelectedGrid ? (
            <MangaCard manga={manga} key={uuidv4()}></MangaCard>
          ) : (
            <></>
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
