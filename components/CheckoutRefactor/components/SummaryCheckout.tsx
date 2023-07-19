import { useCartStore } from "@/store/useCartStore";
import { Stack } from "@chakra-ui/react";
import React from "react";

type Props = {};

const SummaryCheckout = (props: Props) => {
  const cartState = useCartStore((state) => state);
  console.log(cartState);
  return (
    <Stack boxShadow={"lg"} p="4" gap={4} w="full" flex={"1 0 300px"}></Stack>
  );
};

export default SummaryCheckout;
