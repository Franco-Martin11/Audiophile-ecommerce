import { Button, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ImageComponent from "./ImageComponent";
import Link from "next/link";
import { Image } from "@/types/type";

type ProductCategory = {
  newItem: boolean;
  name: string;
  description: string;
  pathRedirect: string;
  image: Image;
  slug: string;
};

const ProductCard = ({
  newItem,
  name,
  description,
  pathRedirect,
  image,
  slug,
}: ProductCategory) => {
  return (
    <SimpleGrid
      justifyItems={"center"}
      alignItems={"center"}
      columns={{ base: 1, lg: 2 }}
      spacing={"none"}
      gap={{ base: 4, md: 8, lg: 12 }}
    >
      <ImageComponent
        bgMobile={image.mobile}
        bgTablet={image.tablet}
        bgDesktop={image.desktop}
        alt={slug}
      />
      <Stack
        spacing={"none"}
        gap={4}
        alignItems={"center"}
        textAlign={{ base: "center", md: "start" }}
      >
        {newItem && (
          <Text
            color={"accent"}
            textTransform={"uppercase"}
            fontWeight={500}
            letterSpacing={"8px"}
          >
            New Product
          </Text>
        )}
        <Heading color={"black"}>{name}</Heading>
        <Text color={"text"}>{description}</Text>
        <Link href={pathRedirect} passHref>
          <Button mt={2}>See Product</Button>
        </Link>
      </Stack>
    </SimpleGrid>
  );
};

export default ProductCard;
