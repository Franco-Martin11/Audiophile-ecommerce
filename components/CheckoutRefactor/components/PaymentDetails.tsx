import { Field } from "@/types/type";
import {
  RadioGroup,
  Radio,
  Heading,
  Input,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
const PaymentDetails = ({ field, formik }: { field: Field[]; formik: any }) => (
  <>
    <RadioGroup
      onChange={(value) => formik.setFieldValue("paymentMethod", value)}
    >
      <HStack gap={4}>
        {field.map((field, index) => (
          <Radio
            defaultChecked
            key={field.name}
            name={field.name}
            value={field.value}
            size="lg"
            colorScheme="orange"
            border="1px solid orange"
          >
            <Text
              as={"span"}
              borderBottom={"1px solid transparent"}
              _hover={{ borderBottom: "1px solid orange" }}
            >
              {field.label}
            </Text>
          </Radio>
        ))}
      </HStack>
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
