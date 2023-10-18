import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../images/book.png";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="50px"
        border="1px"
        borderColor="blue.500"
        borderRadius="50%"
      />
      <Heading>Memajuve's Manga list</Heading>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
