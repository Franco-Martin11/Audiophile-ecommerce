import Head from "next/head";
import { Container, Divider, chakra } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";

type Children = { children: React.ReactNode; title: string };

const PageLayout = ({ children, title = "Challenge" }: Children) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <chakra.main>
        <Container maxW={"container.xl"} mx="auto" p="0">
          <Navbar />
          <Divider my={1} />
        </Container>
        {children}
      </chakra.main>
    </>
  );
};

export default PageLayout;
