import { Box, HStack } from "@chakra-ui/react";
import { Cart, HamburgerMenu, Logo } from "./components";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <HStack
      as="nav"
      justifyContent={"space-between"}
      px="4"
      py="4"
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      w={"full"}
      zIndex={"sticky"}
      bg={"black"}
      borderBottom={"1px solid var(--chakra-colors-gray)"}
    >
      <HamburgerMenu />
      <Box flex={1}>
        <Link href={"/"} passHref>
          <Logo />
        </Link>
      </Box>
      {/* <Navigation /> */}
      <Cart />
    </HStack>
  );
};

export default Navbar;
