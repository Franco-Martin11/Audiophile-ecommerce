import { redirect } from "@/constant/redirect";
import { Grid} from "@chakra-ui/react";
import React from "react";
import ShopCard from "./components/ShopCard";

type Props = {};

const ShopCardContainer = (props: Props) => {
  return (
    <Grid
      templateColumns="repeat(auto-fit,minmax(250px,1fr))"
    >
      {redirect.slice(1).map((element) => (
        <ShopCard
          key={element.id}
          imagePath={element.image?.src}
          routePath={element.path}
          titleCategory={element.title}
        />
      ))}
    </Grid>
  );
};

export default ShopCardContainer;
