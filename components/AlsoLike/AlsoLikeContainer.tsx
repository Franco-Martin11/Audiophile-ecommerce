import { Other } from "@/types/type";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductRecomended from "./components/ProductRecomended";

type Props = { others: Other[] };

const AlsoLikeContainer = ({ others }: Props) => {
  return (
    <>
      <Heading mt={16} variant={'cardHeading'} color={"black"} textAlign={"center"}>
        You may also like
      </Heading>
      <SimpleGrid
        gap={"16"}
        spacing={"none"}
        minChildWidth={{ base: "350px" }}
        px={4}
      >
        {others.map((item) => (
          <ProductRecomended
            key={item.image.mobile}
            image={item.image}
            slug={item.slug}
            title={item.name}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default AlsoLikeContainer;
