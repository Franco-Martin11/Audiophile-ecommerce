import { redirect } from "@/constant/redirect";
import { SimpleGrid } from "@chakra-ui/react";
import ShopCard from "./components/ShopCard";

type Props = {};

const ShopCardContainer = (props: Props) => {
  return (
    <SimpleGrid minChildWidth="250px">
      {redirect.slice(1).map((element) => (
        <ShopCard
          key={element.id}
          imagePath={element.image?.src}
          routePath={element.path}
          titleCategory={element.title}
        />
      ))}
    </SimpleGrid>
  );
};

export default ShopCardContainer;
