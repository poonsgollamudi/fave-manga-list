import { SimpleGrid, Text } from "@chakra-ui/react";
import useMangas from "../hooks/useMangas";
import MangaCard from "./MangaCard";

const MangaGrid = () => {
  const { mangas, error } = useMangas();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {mangas.map((manga: any) => (
          <MangaCard manga={manga} key={manga.id}></MangaCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
