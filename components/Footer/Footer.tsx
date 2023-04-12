import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Logo, Navigation } from "../Navbar/components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Stack
      bg={"black"}
      spacing={8}
      px={4}
      alignItems={"center"}
      textAlign={{ base: "center", lg: "start" }}
    >
      <Box w={"50%"} h={"5px"} bg={"accent"}></Box>
      <Logo />
      <Navigation />
      <SimpleGrid gap={8} columns={{ base: 1, md: 2 }}>
        <Stack color={"textLight"} spacing={4}>
          <Text>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we are open 7 days a week.
          </Text>
          <Text>Copyright 2021. All Rights Reserved</Text>
        </Stack>
        <HStack gap={4} justifyContent={"center"}>
          <Text>Icon</Text>
          <Text>Icon</Text>
          <Text>Icon</Text>
        </HStack>
      </SimpleGrid>
    </Stack>
  );
};

export default Footer;
