import { Container, Divider, chakra } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Navbar/Navbar";

type Props = { children: React.ReactNode; title: string };

const Layout = ({ children, title }: Props): JSX.Element => {
  return (
    <>
      <title>{title}</title>
      <chakra.main maxW={"full"}>
        <Container maxW={"container.xl"} mx="auto" p="0">
          <Navbar />
          <Divider my={1} />
        </Container>
        {children}
      </chakra.main>
    </>
  );
};

export default Layout;
