import { PageLayout } from "@/components";
import HeadingBanner from "@/components/Banner/HeadingBanner";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";
import { Heading, Stack } from "@chakra-ui/react";

export const getServerSideProps = async (context: {
  params: PromiseLike<{ category: any }> | { category: any };
}) => {
  const { category } = await context.params;

  const filteredData = FilteredData({ category, type: "category", slug: "" });
  console.log(filteredData);
  return { props: { res: filteredData, category } };
};

const Index = ({
  res,
  category,
}: {
  res: Product[];
  category: string;
}): JSX.Element => {
  if (res.length === 0)
    return (
      <>
        <Heading>Funcion</Heading>
      </>
    );
  return (
    <PageLayout title={category} bgColor="bg">
      <HeadingBanner categoryTitle={category} />
      <Stack gap={8} bg={"bg"} p={8}>
        {res.map((element: Product) => (
          <ProductCard
            key={element.id}
            newItem={element.new}
            name={element.name}
            description={element.description}
            pathRedirect={`${element.category}/${element.slug}`}
            image={element.image}
            slug={element.slug}
          />
        ))}{" "}
      </Stack>
    </PageLayout>
  );
};

export default Index;
