import ImageComponent from "@/components/ImageComponent";
import { Image } from "@/types/type";
import { Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = { image: Image; slug: string; title: string };

const ProductRecomended = ({ image, slug, title }: Props) => {
  return (
    <SimpleGrid gap={4} columns={1} justifyContent={"center"}>
      <ImageComponent
        bgMobile={image.mobile}
        bgTablet={image.tablet}
        bgDesktop={image.desktop}
        alt={title}
      />{" "}
      <Stack
        alignItems={'center'}
        justifyContent="flex-end"
      >
        <Heading variant={'cardHeading'} fontWeight={'500'} color={"black"}>{title}</Heading>
        <Link href={`/${slug}`}>
          <Button>See Product</Button>
        </Link>{" "}
      </Stack>
    </SimpleGrid>
  );
};

export default ProductRecomended;
