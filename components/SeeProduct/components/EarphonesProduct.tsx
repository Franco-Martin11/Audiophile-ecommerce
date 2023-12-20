import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EarphonesProduct = () => {
  return (
    <HStack
      alignItems={"stretch"}
      justifyContent={"center"}
      gap={4}
      spacing={"0"}
      flexWrap={"wrap"}
      bg={"gray"}
      borderRadius={"lg"}
      _hover={{ boxShadow: "lg" }}
    >
      <Box minW={"250px"}>
        <Image
          src={"/images/home/desktop/image-earphones-yx1.jpg"}
          alt={"earphones-yx1"}
          width={450}
          height={265}
        />
      </Box>
      <Stack
        justifyContent={"center"}
        spacing={6}
        p={4}
        w="full"
        borderRadius={"lg"}
        flex="1"
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
    </HStack>
  );
};

export default EarphonesProduct;
