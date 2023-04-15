import { Other } from "@/types/type";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductRecomended from "./components/ProductRecomended";

type Props = { others: Other[] };

const AlsoLikeContainer = ({ others }: Props) => {
  return (
    <>
      <Heading
        mt={16}
        variant={"cardHeading"}
        color={"black"}
        textAlign={"center"}
      >
        You may also like
      </Heading>
      <SimpleGrid gap={"8"} spacing={"none"} columns={{ base: 1, md: 3 }}>
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
