import { IncludedItem } from "@/types/type";
import { HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = { includedItems: IncludedItem[]; id: number | string };

const IncludedItems = ({ includedItems, id }: Props) => {
  return (
    <Stack gap={3} spacing={"none"}>
      {includedItems.map((item) => (
        <HStack key={id}>
          <Text color={"accent"}>{item.quantity}x</Text>
          <Text color={"text"}>{item.item}</Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default IncludedItems;
