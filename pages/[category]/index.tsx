import { Banner } from "@/components";
import { Product } from "@/types/type";
import { Heading } from "@chakra-ui/react";

type Props = {};

export const getServerSideProps = async (context: {
  params: PromiseLike<{ category: any }> | { category: any };
}) => {
  const { category } = await context.params;
  const data = await fetch(
    `/api/stock-category?category=${category}`
  );
  const res = await data.json();
  return { props: { res } };
};

const Index = ({ res }: { res: Product[] }): JSX.Element => {
  if (res.length === 0) return <Heading>Funciona</Heading>;
  return (
    <div>
      Index
      {res.map((element: Product) => (
        <Banner
          key={element.id}
          description={element.description}
          price={element.price}
          others={element.others}
          id={0}
          slug={""}
          name={""}
          category={""}
          new={false}
          features={""}
          shortName={element.shortName}
          image={element.image}
          cartImage={element.cartImage}
          categoryImage={element.categoryImage}
          includedItems={element.includedItems}
          gallery={element.gallery}
        />
      ))}
    </div>
  );
};

export default Index;
