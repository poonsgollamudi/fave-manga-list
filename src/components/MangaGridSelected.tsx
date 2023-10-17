import { SimpleGrid, Text } from "@chakra-ui/react";
import useMangas, { Manga } from "../hooks/useMangas";
import MangaCard from "./MangaCard";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";
import useData from "../hooks/useData";

interface Props {
  allManga: Manga;
}

const MangaGrid = ({ allManga }: Props) => {
  const { mangas, error } = useData(allManga.title);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 4, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {mangas.map((manga, index) => (
          <MangaCard manga={manga} key={manga.mal_id}></MangaCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
