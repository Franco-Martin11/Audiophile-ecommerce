import {
  Heading,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Box,
} from "@chakra-ui/react";
import React from "react";
// import ImageComponent from "../ImageComponent";
// import { start } from "repl";
import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <Box bg={"white"}>
      <SimpleGrid
        py={10}
        px={4}
        backgroundColor="white"
        justifyItems={"center"}
        alignItems={"center"}
        columns={{ base: 1, lg: 2 }}
        spacing={8}
        maxW="1158px"
        margin={"0 auto !important"}
      >
        {/* <ImageComponent
        bgMobile={"/images/shared/mobile/image-best-gear.jpg"}
        bgTablet={"/images/shared/tablet/image-best-gear.jpg"}
        bgDesktop={"/images/shared/desktop/image-best-gear.jpg"}
        alt={"Beas gear"}
      /> */}
        <Image
          src={"/images/shared/desktop/image-best-gear.jpg"}
          alt={"Beas gear"}
          width={"375"}
          height={"475"}
        />
        <Stack spacing={8} px={4} textAlign={{ base: "center", lg: "start" }}>
          <Heading variant={"cardHeading"} letterSpacing={1} color={"black"}>
            Bring you the <chakra.span color={"accent"}>BEST </chakra.span>
            audio gear
          </Heading>
          <Text color={"text"}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default AboutUs;
