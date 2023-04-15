import { ButtonGroup, Button, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

type Props = { price: number };

const ButtonCart = ({ price }: Props) => {
  const ada = price;
  const [quantityItems, setQuantityItems] = useState(1);
  const handleItems = (type: string) => {
    type === "add" && setQuantityItems((prev) => prev + 1);
    type === "remove" &&
      quantityItems > 1 &&
      setQuantityItems((prev) => prev - 1);
  };
  return (
    <HStack spacing={4}>
      <ButtonGroup
        spacing={"none"}
        bg={"blackAlpha.200"}
        color={"black"}
        variant={"secondary"}
        alignItems={"center"}
      >
        <Button
          px={6}
          _hover={{ bg: "var(--chakra-colors-blackAlpha-300)" }}
          border={"none"}
          onClick={() => handleItems("remove")}
        >
          {" "}
          -{" "}
        </Button>

        <Text px={2}>{quantityItems}</Text>
        <Button
          px={6}
          _hover={{ bg: "var(--chakra-colors-blackAlpha-300)" }}
          border={"none"}
          onClick={() => handleItems("add")}
        >
          {" "}
          +{" "}
        </Button>
      </ButtonGroup>
      <Button>Add to cart</Button>{" "}
    </HStack>
  );
};

export default ButtonCart;