import { Category } from "@/types/type";
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CategoryCard = ({ titleCategory, routePath, imagePath }: Category) => {
  const route = useRouter();
  const handleRedirect = (routePath: string) => route.push(routePath);
  return (
    <Stack position={"relative"} onClick={() => handleRedirect(routePath)}>
      <Stack w={"full"}>
        <Box position={"absolute"} top="-5">
          <Image src={imagePath} alt="Rigth Arrow" width={38} height={38} />
        </Box>
        <Heading letterSpacing={"10px"}>{titleCategory}</Heading>
        <Stack alignItems={"center"}>
          <Text>SHOP</Text>
          <Image
            src={"/images/shared/desktop/icon-arrow-right.svg"}
            alt="Rigth Arrow"
            width={12}
            height={8}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CategoryCard;
