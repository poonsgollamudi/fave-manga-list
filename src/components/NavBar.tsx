import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../images/LadyReadingSilhouette2.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" border="1px" borderColor="blue.500" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
