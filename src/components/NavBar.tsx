import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px" paddingY={"20px"}>
      <Image src={logo} boxSize="60px" />
      <ColourModeSwitch />
    </HStack>
  );
};

export default NavBar;
