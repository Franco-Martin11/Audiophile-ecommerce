import { Field } from "@/types/type";
import { RadioGroup, Radio, Heading, Input } from "@chakra-ui/react";
import React from "react";

type Props = {};

const PaymentDetails = ({ field, formik }: { field: Field[]; formik: any }) => (
  <>
    <RadioGroup
      display={"flex"}
      gap={4}
      colorScheme="orange"
      onChange={(value) => formik.setFieldValue("paymentMethod", value)}
    >
      {field.map((field) => (
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
  </>
);

export default PaymentDetails;
