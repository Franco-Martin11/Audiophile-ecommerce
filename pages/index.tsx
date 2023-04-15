import {
  AboutUs,
  Footer,
  Hero,
  PageLayout,
  ShopCardContainer,
} from "@/components";
import SeeProductContainer from "@/components/SeeProduct/SeeProductContainer";
import { Container, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageLayout title={"home"}>
      <Hero />
      <Stack
        as={"section"}
        maxW="full"
        bgColor="bg"
        gap={16}
        py={10}
        px={4}
        mx="auto"
      >
        <ShopCardContainer />
        <SeeProductContainer />
      </Stack>
    </PageLayout>
  );
}
