import { HStack } from "@chakra-ui/react";
import React from "react";
import { Cart, HamburgerMenu, Logo } from "./components";
import Navigation from "./components/Navigation";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack as="nav" justifyContent={"space-between"} px="4" py="4">
      {/* <HamburgerMenu /> */}
      <Logo />
      {/* <Navigation /> */}
      <Cart />
    </HStack>
  );
};

export default Navbar;
