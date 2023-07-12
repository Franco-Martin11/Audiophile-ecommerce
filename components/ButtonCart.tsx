"use client";
import { addProduct, removeProduct } from "@/store";
import { useAppDispatch } from "@/store/hookStore";
import { CartItems, Optional } from "@/types/type";
import { ButtonGroup, Button, Text, HStack, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type CartItemsPartial = Optional<CartItems, "quantityItems">;

const ButtonCart = ({ price, shortName, cartImage }: CartItemsPartial) => {
  const [quantityItems, setQuantityItems] = useState(1);
  const dispatcher = useAppDispatch();

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
  const addProductHandler = () =>
    dispatcher(addProduct({ price, quantityItems, shortName, cartImage }));

  const removeProductHandler = () =>
    dispatcher(removeProduct({ shortName, quantityItems, price }));

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
      <Stack flex={"1 0 150px"}>
        <Button maxW="250px" onClick={addProductHandler}>
          Add to cart
        </Button>{" "}
        <Button maxW="250px" onClick={removeProductHandler}>
          remove to cart
        </Button>{" "}
      </Stack>
    </HStack>
  );
};

export default ButtonCart;
