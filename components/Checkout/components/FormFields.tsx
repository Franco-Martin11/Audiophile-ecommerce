import GoBack from "@/components/GoBack";
import { FormField } from "@/types/type";
import {
  chakra,
  Box,
  Button,
  Input,
  FormLabel,
  Heading,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import FormRadio from "./FormRadio";

const data: FormField[] = [
  {
    categoryForm: "billing details",
    fields: [
      {
        label: "Email Address",
        name: "email",
        type: "email",
        value: "",
        placeholder: "johndoe@gmail.com",
      },
      {
        label: "Password",
        name: "password",
        type: "password",
        value: "",
        placeholder: "Password",
      },
      {
        label: "Phone Number",
        name: "phoneNumber",
        type: "phoneNumber",
        value: "",
        placeholder: "+54 444-4444",
      },
    ],
  },
  {
    categoryForm: "Shipping info",
    fields: [
      {
        label: "Your Address",
        name: "yourAddress",
        type: "text",
        value: "",
        placeholder: "1137 Williams Street",
      },
      {
        label: "ZIP code",
        name: "zipCode",
        type: "number",
        value: "",
        placeholder: "10001",
      },
      {
        label: "City",
        name: "city",
        type: "text",
        value: "",
        placeholder: "New York",
      },
      {
        label: "Country",
        name: "country",
        type: "text",
        value: "",
        placeholder: "United States",
      },
    ],
  },
  {
    categoryForm: "Payment details",
    fields: [
      {
        label: "e-Money",
        name: "eMoney",
        type: "radio",
        value: "e-Money",
      },
      {
        label: "Cash On Delivery",
        name: "cashOnDelivery",
        type: "radio",
        value: "cashOnDelivery",
      },
    ],
  },
  // Agrega más objetos al array para agregar más campos al formulario
];

function DynamicForm() {
  const initialValues: { [key: string]: string } = { paymentCash: "" }; // define el tipo de la variable initialValues
  data.forEach((field) => {
    field.categoryForm !== "Payment details" &&
      field.fields.forEach((field) => (initialValues[field.name] = ""));
  });

  const handleSubmit = (values: { [key: string]: string }) => {
    // define el tipo del objeto value
    for (const field in values) {
      if (!values[field]) {
        console.log(`Field ${field} is empty`);
      }
    }

    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });
  console.log(formik);
  return (
    <>
      <Box px={8} pt={12} position={"relative"}>
        <GoBack />
        <Heading color={"black"}>Checkout</Heading>
      </Box>
      <chakra.form
        py={4}
        px={8}
        justifyContent={"center"}
        display={"flex"}
        gap={8}
        flexWrap="wrap"
        bg="bg"
        color={"black"}
        onSubmit={formik.handleSubmit}
      >
        {data.map((field) => (
          <Stack flex={"1 0 175px"} maxW="500px" key={field.categoryForm}>
            <Heading
              fontSize={"14px"}
              color="accent"
              fontWeight={500}
              lineHeight={1}
              letterSpacing="2px"
              my={4}
            >
              {field.categoryForm}
            </Heading>

            {field.categoryForm === "Payment details" && (
              <Stack bg={"gray"}>
                <RadioGroup
                  display={"flex"}
                  gap={4}
                  colorScheme="orange"
                  onChange={(value) =>
                    formik.setFieldValue("paymentMethod", value)
                  }
                >
                  {field.fields.map((field) => (
                    <Radio
                      key={field.name}
                      color={"white"}
                      name={field.name}
                      value={field.value}
                    >
                      {field.label}
                    </Radio>
                  ))}
                </RadioGroup>
                {formik?.values?.paymentMethod === "e-Money" && (
                  <>
                    <Heading>{formik.values.paymentMethod}</Heading>
                    <Input
                      size={"md"}
                      focusBorderColor="orange.400"
                      type={"text"}
                      name={"paymentCash"}
                      value={formik.values.paymentCash}
                      placeholder={"e-money"}
                      borderColor="orange.500"
                      _placeholder={{ color: "text" }}
                      onChange={formik.handleChange}
                    />
                  </>
                )}
              </Stack>
            )}

            {field.fields.map(
              (element) =>
                element.type !== "radio" && (
                  <Box key={element.name}>
                    <FormLabel fontSize={"xs"}>{element.label}</FormLabel>
                    <Input
                      borderColor="orange.500"
                      _placeholder={{ color: "text", fontSize: "14px" }}
                      color="black"
                      size={"md"}
                      focusBorderColor="orange.400"
                      type={element.type}
                      name={element.name}
                      value={formik.values[element.name]}
                      placeholder={element.placeholder}
                      onChange={formik.handleChange}
                    />
                  </Box>
                )
            )}
          </Stack>
        ))}
        <Button type="submit">Enviar</Button>
      </chakra.form>
    </>
  );
}

export default DynamicForm;
