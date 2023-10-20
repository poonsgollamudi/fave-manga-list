import { HStack, List, ListItem, Button } from "@chakra-ui/react";
import Manga from "../hooks/mangaInf";
import genrelist from "../data/genrelist";
import { v4 as uuidv4 } from "uuid";

interface Props {
  onSelectedGrenre: (genre: string) => void;
}
let genresL = genrelist;
//console.log(genresL);

const GenreList = ({ onSelectedGrenre }: Props) => {
  return (
    <List paddingTop="30">
      <ListItem key={uuidv4()} paddingY="5px">
        {genresL.map((str: any) => (
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
