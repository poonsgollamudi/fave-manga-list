import { SimpleGrid, Text } from "@chakra-ui/react";
import useMangas, { Manga } from "../hooks/useMangas";
import MangaCard from "./MangaCard";

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
      >
        {mangas.map((manga: any, index) =>
          manga.genres[0].name === genreSelectedGrid ? (
            <MangaCard
              manga={manga}
              key={manga.mal_id}
              genreSelect={genreSelectedGrid}
            ></MangaCard>
          ) : (
            <></>
          )
        )}
      </SimpleGrid>
    </>
  );
};

export default MangaGrid;
