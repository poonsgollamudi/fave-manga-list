import { HStack, List, ListItem, Button } from "@chakra-ui/react";
import useMangas from "../hooks/useMangas";

interface Props {
  onSelectedGrenre: (genre: string) => void;
}
const GenreList = ({ onSelectedGrenre }: Props) => {
  const { genres } = useMangas();

  return (
    <List paddingTop="30">
      {genres.map((genre, index) => (
        <ListItem key={index} paddingY="5px">
          <HStack>
            <Button
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
