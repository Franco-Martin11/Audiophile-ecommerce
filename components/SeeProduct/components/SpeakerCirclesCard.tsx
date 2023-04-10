import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NextPage, GetStaticProps, GetServerSideProps } from "next";
import { Product } from "@/types/type";
import Image from "next/image";

interface Props {
  res: Product;
}

const SpeakerCirclesCard: NextPage<Props> = (props) => {
  // const { name, description } = props.res;
  console.log(props);
  return (
    <>
      <Stack
        bgImg={'url("/images/home/desktop/pattern-circles.svg")'}
        bgRepeat={"no-repeat"}
        bgPosition={"top"}
        borderRadius={"md"}
        boxShadow={"lg"}
        minH={"50vh"}
        w="full"
        gap={"4"}
        spacing={"none"}
        px={"6"}
        py={12}
        bgColor={"teal"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"168px"} h={'250px'} position={"relative"}>
          <Image
            src={"/images/home/desktop/image-speaker-zx9.png"}
            fill={true}
            alt={"speaker"}
          />
        </Box>
        <Stack alignItems={"center"} textAlign={"center"}>
          <Heading fontSize={"38px"} lineHeight={".90"}>
            ZX9 <br /> SPEAKER
          </Heading>
          <Text lineHeight={"1.75"}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </Text>
          <Button bg={"black"}>See Product</Button>
        </Stack>
      </Stack>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const data = await fetch(`http://localhost:3000/api/stock-item?id=6`);
  const res = await data.json();
  console.log(res);
  return {
    props: { res: res },
  };
};

export default SpeakerCirclesCard;