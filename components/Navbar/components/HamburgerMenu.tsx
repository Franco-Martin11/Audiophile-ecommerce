import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const HamburgerMenu = (props: Props) => {
  const [state, setState] = useState(true);
  return (
    <Menu>
      <MenuButton
        as={Button}
        variant={"ghost"}
        onClick={() => setState(!state)}
      >
        {state ? (
          <Image
            alt="prueba"
            width={18}
            height={18}
            src={"/images/shared/tablet/icon-hamburger.svg"}
          />
        ) : (
          <Image
            alt="prueba"
            width={18}
            height={18}
            src={"/images/shared/tablet/icon-close-menu.svg"}
          />
        )}
      </MenuButton>

      <MenuList>
        <HStack>
          <MenuItem command="⌘T">New Tab</MenuItem>
          <MenuItem command="⌘T">New Tab</MenuItem>
        </HStack>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;
