import cartReducer, { useCartStore } from "@/store/useCartStore";
import { CartItems } from "@/types/type";
import { formatedNumber } from "@/utils";
import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import CartQuantity from "./CartQuantity";


const CartModal = () => {
    const cartState = useCartStore((state) => state);
    const { resetCart } = cartReducer;
    const handleReset = () => resetCart();
  
    return (
      <>
        <Box
          zIndex={"popover"}
          top={"16"}
          bg={"bg"}
          borderRadius={"lg"}
          mx={"auto"}
          p={6}
          w={"full"}
          maxW={'45rem'}
        >
          <HStack justifyContent={"space-between"}>
            <Heading textColor={"black"} fontSize={"18px"} fontWeight={"500"}>
              Cart {cartState && `( ${cartState.items.length} )`}
            </Heading>
            <Button
              textDecoration={"underline"}
              onClick={handleReset}
              variant={"link"}
            >
              Remove All
            </Button>
          </HStack>
          <Stack minH={"100px"}>
            {cartState.items?.map((cartState: CartItems) => (
              <CartQuantity
                key={cartState.shortName}
                price={cartState.price}
                shortName={cartState.shortName}
                cartImage={cartState.cartImage}
                quantityItems={cartState.quantityItems}
              />
            ))}
          </Stack>
          <Stack>
            <HStack spacing={0} gap={6} justifyContent={"flex-end"}>
              <Text color="text">TOTAL</Text>
              <Heading color={"#242323"} fontSize={"22px"} fontWeight={"700"}>
                {formatedNumber(cartState.totalPrice)}
              </Heading>
            </HStack>
            <Link href={"/checkout"} passHref>
              <Button>Checkout</Button>
            </Link>
          </Stack>
        </Box>
      </>
    );
  };
  

export default CartModal



