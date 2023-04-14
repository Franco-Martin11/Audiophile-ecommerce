import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  bgMobile: string;
  bgTablet: string;
  bgDesktop: string;
  alt: string;
  children?: React.ReactNode;
};

const ImageComponent = ({
  bgMobile,
  bgTablet,
  bgDesktop,
  alt,
  children,
}: Props) => {
  return (
    <Box as="picture" display={'flex'} height="100%" position={"relative"}>
      <source media="(min-width: 62em)" srcSet={bgDesktop} />
      <source media="(min-width: 30em)" srcSet={bgTablet} />
      <Image src={bgMobile} objectFit="cover" borderRadius="0.5rem" alt={alt} />
      {children}
    </Box>
  );
};

export default ImageComponent;
