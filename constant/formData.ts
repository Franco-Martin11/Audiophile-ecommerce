import { FormField } from "@/types/type";

export const FORM_DATA: FormField[] = [
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
