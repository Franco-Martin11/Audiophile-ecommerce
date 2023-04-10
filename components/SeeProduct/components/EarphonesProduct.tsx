import ImageComponent from "@/components/ImageComponent";
import { Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const EarphonesProduct = () => {
  return (
    <SimpleGrid justifyItems={"center"} columns={{ base: 1, sm: 2 }} gap={4}>
      <ImageComponent
        bgMobile={"/images/home/mobile/image-earphones-yx1.jpg"}
        bgTablet={"/images/home/tablet/image-earphones-yx1.jpg"}
        bgDesktop={"/images/home/desktop/image-earphones-yx1.jpg"}
        alt={"earphones-yx1"}
      />
      <Stack
        h={{ base: "200px", sm: "auto" }}
        justifyContent={"center"}
        p={4}
        spacing={6}
        bg={"gray"}
        w="full"
        borderRadius={"lg"}
        _hover={{ boxShadow: "lg" }}
      >
        <Heading color={"black"} fontSize={"28px"}>
          yx1 earphones
        </Heading>
        <Link href={"/earphones/yx1-earphones"} passHref>
          <Button variant={"secondary"} w="fit-content">
            See Product
          </Button>
        </Link>
      </Stack>
    </SimpleGrid>
  );
};

export default EarphonesProduct;
