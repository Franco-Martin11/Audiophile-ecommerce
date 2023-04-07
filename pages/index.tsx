import { Hero, ShopCardContainer } from "@/components";
import Layout from "@/components/Layout/Layout";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout title={"section"}>
      <Hero />
      <Container as={"section"} maxW="full" bgColor="bg" py={10} mx="auto">
        <ShopCardContainer />
      </Container>
    </Layout>
  );
}
