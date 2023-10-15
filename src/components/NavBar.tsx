import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/woman-reading-book-color.jpg";
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
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
