import { addProduct, removeProduct } from "@/store";
import { CartItems } from "@/types/type";
import { ButtonGroup, Button, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ButtonCart = ({ price, shortName, cartImage }: CartItems) => {
  const [quantityItems, setQuantityItems] = useState(1);
  const dispatcher = useDispatch();
  const handleItems = (type: string) => {
    if (type === "add") {
      setQuantityItems((prev) => prev + 1);
      return;
    }
    if (type === "remove") {
      quantityItems > 1;
      setQuantityItems((prev) => prev - 1);
    }
  };

  const handleSendToCart = (type: string) => {
    type === "add" &&
      dispatcher(addProduct({ price, quantityItems, shortName, cartImage }));
    if (type === "remove") {
      dispatcher(removeProduct({ shortName, quantityItems, price }));
    }
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
      <Button onClick={() => handleSendToCart("add")}>Add to cart</Button>{" "}
      <Button onClick={() => handleSendToCart("remove")}>remove to cart</Button>{" "}
    </HStack>
  );
};

export default ButtonCart;
