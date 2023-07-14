import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  titleCategory: string;
  routePath: string;
  imagePath?: string;
}

const ShopCard = ({ titleCategory, routePath, imagePath }: Props) => {
  return (
    <Link passHref href={routePath}>
      <Stack
        alignItems="center"
        position="relative"
        justifyContent="center"
        pt={20}
        pb={8}
        bgColor="gray"
        borderRadius="lg"
        boxShadow="sm"
        mx={4}
        mt={20}
        cursor="pointer"
      >
        {imagePath && (
          <Stack align="center" position="absolute" top="-45px">
            <Image src={imagePath} alt="Right Arrow" width={138} height={50} />
          </Stack>
        )}
        <Heading variant="cardCategoryTitles">{titleCategory}</Heading>
        <HStack alignItems="center">
          <Text color="text" fontSize="13px">
            SHOP
          </Text>
          <Image
            src="/images/shared/desktop/icon-arrow-right.svg"
            alt="Right Arrow"
            width={8}
            height={12}
          />
        </HStack>
      </Stack>
    </Link>
  );
};

export default ShopCard;
