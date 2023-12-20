import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Logo from "./Logo";
import ShopCardContainer from "@/components/ShopCard/ShopCardContainer";

const HamburgerMenu = () => {
  return (
    <DrawerMenu />
  );
};

export default HamburgerMenu;

function DrawerMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button ref={btnRef} variant={""} onClick={onOpen}>
        <Image
          alt="prueba"
          width={18}
          height={18}
          src={"/images/shared/tablet/icon-hamburger.svg"}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={{ base: "full", md: "xl" }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"black"}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo />
          </DrawerHeader>

          <DrawerBody mb={8}>
          <ShopCardContainer/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
