import { PageLayout } from "@/components";
import { Stack } from "@chakra-ui/react";
import dynamic from "next/dynamic";

export default function Home() {
  const ShopCardContainer = dynamic(
    () => import("../components/ShopCard/ShopCardContainer")
  );
  const SeeProductContainer = dynamic(
    () => import("../components/SeeProduct/SeeProductContainer")
  );
  return (
    <PageLayout title={"home"} bgColor="bg">
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
