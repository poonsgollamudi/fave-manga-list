import { HStack, List, ListItem, Button } from "@chakra-ui/react";
import useMangas, { Manga } from "../hooks/useMangas";

interface Props {
  onSelectedGrenre: (genre: string) => void;
  mangaTitle: Manga;
}
const GenreList = ({ mangaTitle, onSelectedGrenre }: Props) => {
  const { genres } = useMangas(mangaTitle.title);

  return (
    <List paddingTop="30">
      {genres.map((genre, index) => (
        <ListItem key={index} paddingY="5px">
          <HStack>
            <Button
              fontWeight={genre.mal_id === mangaTitle?.mal_id ? "bold" : "none"}
              fontSize="lg"
              color="teal.500"
              variant="link"
              onClick={() => onSelectedGrenre(genre)}
            >
              {genre}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
