import { Button } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const HamburgerMenu = (props: Props) => {
  const [state, setState] = useState(true);
  const handleClick = () => setState((prev) => !prev);
  return (
    <Button variant={state ? "link" : "primary"} onClick={handleClick}>
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
    </Button>
  );
};

export default HamburgerMenu;
