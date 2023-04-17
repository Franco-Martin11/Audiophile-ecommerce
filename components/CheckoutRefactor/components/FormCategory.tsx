import { FormField } from "@/types/type";
import { Stack, Heading } from "@chakra-ui/react";
import React from "react";
import FormFields from "./FormField";
import PaymentDetails from "./PaymentDetails";

type Props = {};

const FormCategory = ({ field, formik }: { field: FormField; formik: any }) => {
  const FormComponent =
    field.categoryForm !== "Payment details" ? FormFields : PaymentDetails;

  return (
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
      <FormComponent field={field.fields} formik={formik} />
    </Stack>
  );
};

export default FormCategory;
