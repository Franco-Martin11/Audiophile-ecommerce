import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <Stack
      bgImage={{
        base: "url(/images/home/mobile/image-hero.jpg)",
        md: "url('/images/home/tablet/image-hero.jpg')",
        lg: "url('/images/home/desktop/image-hero.jpg')",
      }}
      bgPosition={{ base: "center", lg: "right" }}
      bgSize={{ base: "cover", md: "contain" }}
      bgRepeat="no-repeat"
      justifyContent="center"
      alignItems={{ base: "center", md: "flex-start" }}
      minH={"75vh"}
      maxW="container.xl"
      mx="auto"
    >
      <Stack
        textAlign={{ base: "center", xl: "start" }}
        spacing={"none"}
        gap={6}
        px={{ base: "8", md: "12", lg: "16", xl: "20" }}
        alignItems={{ base: "center", xl: "start" }}
        maxW="550px"
      >
        <Heading as={"h1"} variant="title" fontSize={{ md: "42px" }}>
          <Text
            color={"textLight"}
            textTransform={"uppercase"}
            letterSpacing={"0.625rem"}
            fontSize="14px"
            my={4}
          >
            New product
          </Text>
          XX99 Mark II Headphones
        </Heading>
        <Text color={"textLight"}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.{" "}
        </Text>
        <Link href={"/headphones/xx99-mark-two-headphones"}>
          <Button mt={4}>See Products</Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Hero;
