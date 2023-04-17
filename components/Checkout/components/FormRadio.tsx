import { Field } from "@/types/type";
import { Stack, Radio } from "@chakra-ui/react";
import React from "react";

type Props = {};

const FormRadio = ({ label, name, value }: Field) => {
  return (
    <Stack spacing={5} direction="row">
      <Radio color={"white"} name={name} colorScheme="orange" value={value}>
        {label}
      </Radio>
    </Stack>
  );
};

export default FormRadio;
