import { SimpleGrid, Text } from "@chakra-ui/react";
import MangaCard from "./MangaCard";
import mangaL from "../hooks/getData";

interface Props {
  genreSelectedGrid: string;
}

const MangaGrid = ({ genreSelectedGrid }: Props) => {
  let mangaList = mangaL.mangaL;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {mangaList.map((manga: any, index) =>
          manga.genres[0].name === genreSelectedGrid ? (
            <MangaCard manga={manga} key={manga.mal_id}></MangaCard>
          ) : (
            <></>
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
