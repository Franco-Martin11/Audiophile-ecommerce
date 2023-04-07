import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  baseStyle: {
    fontSize: "36px",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  variants: {
    cardHeading: {
      fontSize: "28px",
    },
    title: {
      fontSize: "36px",
      textTransform: "uppercase",
      fontWeight: "700",
    },
    cardCategoryTitles: {
      fontSize: "15px",
      letterSpacing: "4px",
      color: "black",
    },
  },
  defaultProps: {
    variant: "title",
  },
});

export const Button = {
  baseStyle: {
    fontWeight: "bold",
    textTransform: "uppercase",
    borderRadius: 0,
    letterSpacing: "0.0625rem",
  },
  sizes: {
    regular: {
      px: 8,
      py: 3.5,
      fontSize: "0.8125rem",
    },
  },
  variants: {
    primary: {
      bg: "accent",
      color: "white",
      _hover: {
        bg: "accentLight",
      },
      _disabled: {
        bg: "accent",
      },
      ":hover[disabled]": {
        bg: "accent",
      },
      ':hover[aria-disabled="true"]': {
        bg: "accent",
      },
    },
    secondary: {
      bg: "transparent",
      color: "black",
      border: "1px solid black",
      _hover: {
        bg: "black",
        color: "white",
      },
    },
    link: {
      background: "transparent",
      border: "none",
      color: "text",
      padding: "0",
      fontWeight: "normal",
      _hover: {
        background: "transparent",
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "regular",
  },
};
