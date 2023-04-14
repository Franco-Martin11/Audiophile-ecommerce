import {
  Button,
  ButtonGroup,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import ImageComponent from "./ImageComponent";
import { Product } from "@/types/type";
import { formatedNumber } from "@/utils/formatedNumber";
import { useState } from "react";
import ButtonCart from "./ButtonCart";
import IncludedItems from "./IncludedItems";

const IndividualCardProduct = ({
  slug,
  name,
  shortName,
  image,
  cartImage,
  category,
  categoryImage,
  new: newItem,
  price,
  description,
  features,
  includedItems,
  gallery,
  others,
}: Product) => {
  console.log(gallery);
  return (
    <Stack gap={8} spacing={"none"} bg={"white"} p={4}>
      <SimpleGrid gap={4} columns={{ base: 1, lg: 2 }} alignItems={"center"}>
        <ImageComponent
          bgMobile={image.mobile}
          bgTablet={image.tablet}
          bgDesktop={image.desktop}
          alt={slug}
        />
        <Stack gap={4} spacing={"none"}>
          {newItem && (
            <Text
              color={"accent"}
              textTransform={"uppercase"}
              fontWeight={500}
              letterSpacing={"8px"}
            >
              New Product
            </Text>
          )}
          <Heading color={"black"}>{name}</Heading>
          <Text color={"text"}>{description}</Text>
          <Heading variant={"cardHeading"} color={"black"}>
            {formatedNumber(price)}
          </Heading>
          <ButtonCart price={price} />
        </Stack>
      </SimpleGrid>

      <Stack>
        <Heading color={"black"}>Features</Heading>
        <Text color={"text"}>{features}</Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"none"} gap={4}>
        <Heading color={"black"}>In the box</Heading>
        <IncludedItems includedItems={includedItems} id={slug} />{" "}
      </SimpleGrid>
      {gallery && (
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"none"} gap={6}>
          {gallery.map((gallery, index) => (
            <ImageComponent
              key={`galery-${index}`}
              bgMobile={gallery.mobile}
              bgTablet={gallery.tablet}
              bgDesktop={gallery.desktop}
              alt={"galery"}
            />
          ))}
        </SimpleGrid>
      )}
    </Stack>
  );
};

export default IndividualCardProduct;
