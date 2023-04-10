import { Box, Button, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

const SpeakerProductCard = (props: Props) => {
  return (
    <Stack
      justifyContent={"center"}
      py={"20"}
      borderRadius={"lg"}
      bg={'url("/images/home/mobile/image-speaker-zx7.jpg")'}
      bgPosition={"right"}
      bgSize={"cover"}
    >
      <Stack w={"75%"} p={4} spacing={8}>
        <Heading fontSize={"28px"} color={"black"}>
          ZX7 Speaker
        </Heading>
        <Link href={'/speakers/zx7-speaker'} passHref>
        <Button variant={"secondary"} w={"fit-content"}>
          See Product
        </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default SpeakerProductCard;
