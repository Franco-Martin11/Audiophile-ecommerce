import { HStack } from "@chakra-ui/react";
import { Cart, HamburgerMenu, Logo } from "./components";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack as="nav" justifyContent={"space-between"} px="4" py="4">
      <HamburgerMenu />
      <Link href={"/"} passHref>
        <Logo />
      </Link>
      {/* <Navigation /> */}
      <Cart />
    </HStack>
  );
};

export default Navbar;
