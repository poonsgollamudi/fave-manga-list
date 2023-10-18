import { HStack, List, ListItem, Button } from "@chakra-ui/react";
import useMangas from "../hooks/useMangas";
import Manga from "../hooks/mangaInf";
import genres from "../hooks/getData";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onSelectedGrenre: (genre: string) => void;
}
let genresL = genres.genres;

const GenreList = ({ onSelectedGrenre }: Props) => {
  return (
    <List paddingTop="30">
      <ListItem key={uuidv4()} paddingY="5px" padding={5}>
        {genresL.map((str) => (
          <HStack key={uuidv4()}>
            <Button
              fontSize="lg"
              color="teal.500"
              variant="link"
              onClick={() => onSelectedGrenre(str)}
            >
              {str}
            </Button>
          </HStack>
        ))}
      </ListItem>
    </List>
  );
};

export default GenreList;
