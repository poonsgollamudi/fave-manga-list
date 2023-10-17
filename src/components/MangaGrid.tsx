import { SimpleGrid, Text } from "@chakra-ui/react";
import useMangas, { Manga } from "../hooks/useMangas";
import MangaCard from "./MangaCard";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onMangaDisplayed: (genre: string) => void;
  allManga: Manga;
  genreSelectedGrid: string;
}

const MangaGrid = ({ allManga, genreSelectedGrid }: Props) => {
  const { mangas } = useMangas(allManga.title);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
        key={uuidv4()}
      >
        {mangas.map((manga: any) => (
          <MangaCard
            manga={manga}
            key={uuidv4()}
            genreSelect={genreSelectedGrid}
          ></MangaCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
