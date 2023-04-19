import { formatedNumber } from "@/utils";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "@/store";
import { CartItems } from "@/types/type";
import Link from "next/link";

type Props = {};

const CartModal = (props: Props) => {
  const cartState = useSelector((store: any) => store.cart);
  const dispatcher = useDispatch();
  const handleReset = () => dispatcher(removeProduct([]));

  return (
    <Box
      position={"absolute"}
      zIndex={"overlay"}
      w={"full"}
      h={"25vh"}
      bg={"blackAlpha.600"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      margin={"0 !important"}
      pt={20}
    >
      <Box
        zIndex={"popover"}
        top={"16"}
        bg={"bg"}
        w={"90%"}
        borderRadius={"lg"}
        mx={"auto"}
        p={6}
      >
        <HStack justifyContent={"space-between"}>
          <Heading color={"black"} fontSize={"18px"} fontWeight={"500"}>
            Cart {cartState && `( ${cartState.length} )`}
          </Heading>
          <Button
            textDecoration={"underline"}
            onClick={handleReset}
            variant={"link"}
          >
            Remove All
          </Button>
        </HStack>
        {cartState.items?.map((cartState: CartItems) => (
          <HStack my={4} key={cartState.shortName} alignItems={"center"}>
            <HStack flex={1} alignItems={"center"} gap={4} spacing={"0"}>
              <Image
                src={cartState.cartImage}
                alt={cartState.shortName}
                boxSize={"68px"}
                borderRadius={"lg"}
                boxShadow={"lg"}
              />
              <Stack flex={1} spacing={"0"}>
                <Heading color={"black"} fontSize={"16px"} fontWeight={"700"}>
                  {cartState.shortName}
                </Heading>
                <Heading color={"text"} fontSize={"18px"} fontWeight={"500"}>
                  {formatedNumber(cartState.price)}
                </Heading>
              </Stack>{" "}
            </HStack>
            <Box flex={1} bg={"red"}></Box>
          </HStack>
        ))}
        <Stack>
          <HStack justifyContent={"space-between"}>
            <Text color="text">TOTAL</Text>
            <Heading color={"#242323"} fontSize={"22px"} fontWeight={"700"}>
              {formatedNumber(155000)}
            </Heading>
          </HStack>
          <Link href={"/checkout"} passHref>
            <Button>Checkout</Button>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartModal;
