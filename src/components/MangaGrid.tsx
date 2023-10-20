import { SimpleGrid, Text } from "@chakra-ui/react";
import MangaCard from "./MangaCard";
import { v4 as uuidv4 } from "uuid";
import mangaL from "../data/mangalist";

const MangaGrid = () => {
  let mangaList = mangaL;
  // console.log(mangaList);
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
        key={uuidv4()}
      >
        {mangaList.map((manga: any) => (
          <MangaCard manga={manga} key={uuidv4()}></MangaCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
