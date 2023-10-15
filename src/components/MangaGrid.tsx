import { Text } from "@chakra-ui/react";
import useMangas from "../hooks/useMangas";

const MangaGrid = () => {
  const { mangas, error } = useMangas();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {mangas.map((manga: any) => (
          <li key={manga.mal_id}>{manga.title}</li>
        ))}
      </ul>
    </>
  );
};

export default MangaGrid;
