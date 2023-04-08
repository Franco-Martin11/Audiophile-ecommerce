import { Hero, PageLayout, ShopCardContainer } from "@/components";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageLayout title={"section"}>
      <Hero />
      <Container as={"section"} maxW="full" bgColor="bg" py={10} mx="auto">
        <ShopCardContainer />
      </Container>
    </PageLayout>
  );
}
