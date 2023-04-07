import { ShopCard } from "@/components";
import { Product } from "@/types/type";
import { formatedNumber } from "@/utils/formatedNumber";
import {
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type Props = {};

const Banner: React.FC<Product> = ({
  description,
  price,
  others,
  image,
  shortName,
}) => {
  return (
    <Stack gap={4} spacing="none" bgColor={"teal.900"} p="4" my={10}>
      <Heading>Banner</Heading>
      <Text>{description}</Text>
      <ShopCard />
      <Divider></Divider>
      <Heading>{formatedNumber(price)}</Heading>
      <Divider></Divider>
      <Box position={"relative"} boxSize={{ base: "xs", md: "md", lg: "lg" }}>
        <Image src={image.desktop} fill={true} alt={`Product ${shortName}`} />
      </Box>
      <HStack>
        {others?.map((other) => (
          <Badge key={other.slug}>{other.name}</Badge>
        ))}
      </HStack>
    </Stack>
  );
};

export default Banner;
