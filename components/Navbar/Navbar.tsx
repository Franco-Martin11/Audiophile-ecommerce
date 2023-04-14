import { HStack } from "@chakra-ui/react";
import { Cart, HamburgerMenu, Logo } from "./components";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack as="nav" justifyContent={"space-between"} px="4" py="4">
      <HamburgerMenu />
      <Logo />
      {/* <Navigation /> */}
      <Cart />
    </HStack>
  );
};

export default Navbar;
