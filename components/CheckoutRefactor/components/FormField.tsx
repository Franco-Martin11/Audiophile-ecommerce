import { Field } from "@/types/type";
import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

type Props = {};

const FormFields = ({ field, formik }: { field: Field[]; formik: any }) => (
  <>
    {field.map(
      (element) =>
        element.type !== "radio" && (
          <Box key={element.name}>
            <FormLabel fontSize={"sm"}>{element.label}</FormLabel>
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
  </>
);

export default FormFields;
