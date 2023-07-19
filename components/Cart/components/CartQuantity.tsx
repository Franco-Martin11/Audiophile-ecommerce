import { CartItems } from "@/types/type";
import { formatedNumber } from "@/utils";
import { HStack, Stack, Heading, Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartQuantity = ({
  cartImage,
  price,
  quantityItems,
  shortName,
}: CartItems) => {
  return (
    <HStack flex={1} my={4} key={shortName} alignItems={"center"}>
      <HStack flex={1} alignItems={"center"} gap={4} spacing={"0"}>
        <Image
          src={cartImage}
          alt={shortName}
          boxSize={"68px"}
          borderRadius={"lg"}
          boxShadow={"lg"}
        />
        <Stack flex={1} spacing={"0"}>
          <Heading color={"black"} fontSize={"22px"} fontWeight={"700"}>
            {shortName}
          </Heading>
          <HStack alignItems={"center"} spacing="0" gap={4}>
            <Heading fontSize={"18px"} color={"text"} fontWeight={"500"}>
              {formatedNumber(price)}
            </Heading>
            <Text fontSize={"18px"} color="accent">
              x{quantityItems}
            </Text>
          </HStack>
        </Stack>{" "}
      </HStack>
      <Box flex={1} bg={"red"}></Box>
    </HStack>
  );
};

export default CartQuantity;
