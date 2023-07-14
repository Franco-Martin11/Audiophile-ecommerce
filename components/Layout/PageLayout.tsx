import Head from "next/head";
import { Box, Container, Divider, chakra } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import { CapitalizeFirstLetter } from "@/utils";
import Hero from "../Hero/Hero";

type Children = { children: React.ReactNode; title: string; bgColor?: string };

const PageLayout = ({
  children,
  title = "Challenge",
  bgColor = "white",
}: Children) => {
  return (
    <>
      <Head>
        <title>{CapitalizeFirstLetter(title)}</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <chakra.main position={'relative'}>
        <Container maxW={"container.xl"} mx="auto" p="0">
          <Navbar />
          <Divider my={1} />
          {title === "home" && <Hero />}
        </Container>
        <Box mt={"80px"} bg={bgColor}>
          <Container maxW={"container.lg"} mx="auto" p={"0"}>
            {children}
          </Container>
        </Box>
      </chakra.main>
    </>
  );
};

export default PageLayout;
