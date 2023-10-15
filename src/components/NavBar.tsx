import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/woman-reading-book-color.jpg";

const NavBar = () => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="50px"
        border="1px"
        borderColor="blue.500"
        borderRadius="50%"
      />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
