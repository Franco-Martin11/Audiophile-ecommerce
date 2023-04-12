import React from "react";
import {
  EarphonesProduct,
  SpeakerCirclesCard,
  SpeakerProductCard,
} from "./components";
import { Stack } from "@chakra-ui/react";

type Props = {};

const SeeProductContainer = (props: Props) => {
  return (
    <Stack spacing={'none'} gap={6}>
      <SpeakerCirclesCard/>
      <SpeakerProductCard />
      <EarphonesProduct />
    </Stack>
  );
};

export default SeeProductContainer;
