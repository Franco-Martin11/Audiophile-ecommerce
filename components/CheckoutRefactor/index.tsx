// import { FORM_DATA } from "@/constant";
// import { Box, chakra, Button, Heading } from "@chakra-ui/react";
// import { useFormik } from "formik";
// import GoBack from "../GoBack";
// import FormCategory from "./components/FormCategory";

//   const handleSubmit = (values: { [key: string]: string }) => {
//     for (const field in values) {
//       if (!values[field]) {
//         alert(`Field ${field} is empty`);
//       }
//     }
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit: handleSubmit,
//   });

//   return (
//     <>
//       <Box px={8} pt={12}>
//         <GoBack />
//         <Heading color={"black"}>Checkout</Heading>
//       </Box>
//       <chakra.form
//         py={4}
//         px={8}
//         justifyContent={"center"}
//         display={"flex"}
//         gap={8}
//         flexWrap="wrap"
//         bg="bg"
//         color={"black"}
//         onSubmit={formik.handleSubmit}
//       >
//         {/* <Stack spacing={8} direction={"row"} justify={"space-between"}> */}
//         {FORM_DATA.map((form) => (
//           <FormCategory key={form.categoryForm} field={form} formik={formik} />
//         ))}
//         {/* </Stack> */}
//         <Box my={8} mx={"auto"} textAlign={"center"}>
//           <Button
//             type={"submit"}
//             colorScheme={"orange"}
//             borderRadius={"30px"}
//             px={"50px"}
//             fontSize={"14px"}
//             fontWeight={700}
//             textTransform={"uppercase"}
//             _hover={{
//               bg: "orange.400",
//             }}
//             _active={{
//               bg: "orange.500",
//             }}
//             onClick={() => formik.handleSubmit()}
//           >
//             Confirm order
//           </Button>
//         </Box>
//       </chakra.form>
//     </>
//   );
// };
// export default CheckoutForm;

import { FORM_DATA } from "@/constant";
import { Box, chakra, Button, Heading, HStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import GoBack from "../GoBack";
import FormCategory from "./components/FormCategory";
import SummaryCheckout from "./components/SummaryCheckout";

const CheckoutForm = () => {
  const initialValues = FORM_DATA.reduce(
    (
      acc: { [x: string]: string },
      field: { categoryForm: string; fields: any[] }
    ) => {
      if (field.categoryForm !== "Payment details") {
        field.fields.forEach((field: { name: string | number }) => {
          acc[field.name] = "";
        });
      }
      return acc;
    },
    { paymentCash: "" }
  );

  const handleSubmit = (values: { [x: string]: any }) => {
    for (const field in values) {
      if (!values[field]) {
        alert(`Field ${field} is empty`);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <Box px={8} pt={12}>
        <GoBack />
        <Heading color="black">Checkout</Heading>
      </Box>
      <HStack flexWrap={"wrap"} gap="4" py={4} px={8}>
        <chakra.form
          justifyContent="center"
          display="flex"
          flexDir={"column"}
          gap={8}
          flexWrap="wrap"
          bg="bg"
          color="black"
          onSubmit={formik.handleSubmit}
          flex={1}
        >
          {FORM_DATA.map((form) => (
            <FormCategory
              key={form.categoryForm}
              field={form}
              formik={formik}
            />
          ))}
          <Box my={8} mx="auto" textAlign="center">
            <Button
              type="submit"
              colorScheme="orange"
              borderRadius="30px"
              px="50px"
              fontSize="14px"
              fontWeight={700}
              textTransform="uppercase"
              _hover={{
                bg: "orange.400",
              }}
              _active={{
                bg: "orange.500",
              }}
              onClick={() => formik.handleSubmit()}
            >
              Confirm order
            </Button>
          </Box>
        </chakra.form>
        <SummaryCheckout />
      </HStack>
    </>
  );
};

export default CheckoutForm;
