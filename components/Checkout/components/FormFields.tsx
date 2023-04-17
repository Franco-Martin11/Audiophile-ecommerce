import {
  chakra,
  Box,
  Button,
  FormHelperText,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useFormik } from "formik";

type Field = {
  label: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
};

const data: Field[] = [
  {
    label: "email address",
    name: "email",
    type: "email",
    value: "",
    placeholder: "johndoe@gmail.com",
  },
  {
    label: "password",
    name: "password",
    type: "password",
    value: "",
    placeholder: "password",
  },
  // Agrega más objetos al array para agregar más campos al formulario
];

function DynamicForm() {
  const initialValues: { [key: string]: string } = {}; // define el tipo de la variable initialValues
  data.forEach((field) => {
    initialValues[field.name] = "";
  });

  const handleSubmit = (values: { [key: string]: string }) => {
    // define el tipo del objeto values

    for (const field in values) {
      if (!values[field]) {
        console.log(`Field ${field} is empty`);
      }
    }

    // alert(JSON.stringify(values));
    // Agrega aquí tu lógica de envío de formulario
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {data.map((field) => (
        <Box key={field.name}>
          <FormLabel>{field.label}</FormLabel>
          <Input
            focusBorderColor="orange.400"
            type={field.type}
            name={field.name}
            value={formik.values[field.name]}
            placeholder={field.placeholder}
            onChange={formik.handleChange}
          />
        </Box>
      ))}
      <Button type="submit">Enviar</Button>
    </form>
  );
}

export default DynamicForm;
