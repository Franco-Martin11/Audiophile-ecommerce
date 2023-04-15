import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const HeadingBanner = ({ categoryTitle }: { categoryTitle: string }) => {
  return (
    <Box bg={"black"} py={{ base: 8, lg: 20 }} textAlign={"center"}>
      <Heading variant={{base:"cardHeading",md:"CategoryTitle"}}>{categoryTitle}</Heading>
    </Box>
  );
};

export default HeadingBanner;
