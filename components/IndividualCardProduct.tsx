import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Product } from "@/types/type";
import { formatedNumber } from "@/utils";
import {
  IncludedItems,
  ImageComponent,
  AlsoLikeContainer,
  ButtonCart,
  ShopCardContainer,
  GoBack,
} from "../components";

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
    <Stack
      position={"relative"}
      gap={16}
      spacing={"none"}
      py={12}
    >
      <GoBack />
      <SimpleGrid gap={8} columns={{ base: 1, md: 2 }} alignItems={"center"}>
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
              key={gallery.mobile}
              bgMobile={gallery.mobile}
              bgTablet={gallery.tablet}
              bgDesktop={gallery.desktop}
              alt={"galery"}
            />
          ))}
        </SimpleGrid>
      )}
      {others && <AlsoLikeContainer others={others} />}

      <ShopCardContainer />
    </Stack>
  );
};

export default IndividualCardProduct;
