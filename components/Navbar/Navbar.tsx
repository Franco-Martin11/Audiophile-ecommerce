import { HStack, Box } from "@chakra-ui/react";
import { Cart, HamburgerMenu, Logo } from "@/components";
import Link from "next/link";

const Navbar = () => {
  return (
    <HStack
      as="nav"
      justifyContent="space-between"
      px={4}
      py={4}
      position="fixed"
      top={0}
      left={0}
      right={0}
      w="full"
      zIndex="sticky"
      bg="black"
      borderBottom="1px solid var(--chakra-colors-gray)"
    >
      <HamburgerMenu />
      <Box flex={1}>
        <Link href="/" title="Home Button">
          <Logo />
        </Link>
      </Box>
      <Cart />
    </HStack>
  );
};

export default Navbar;
