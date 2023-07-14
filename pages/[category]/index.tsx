import { NextPage } from "next";
import { Heading, Stack } from "@chakra-ui/react";
import { PageLayout, HeadingBanner, ProductCard } from "@/components";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";

interface Props {
  res: Product[];
  category: string;
}

const Index: NextPage<Props> = ({ res, category }) => {
  if (res.length === 0) {
    return (
      <PageLayout title={category}>
        <Heading>Funcion</Heading>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={category} bgColor="bg">
      <HeadingBanner categoryTitle={category} />
      <Stack gap={8} bg="bg" p={8}>
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
        ))}
      </Stack>
    </PageLayout>
  );
};

export async function getServerSideProps(context: {
  params: { category: string };
}) {
  const { category } = context.params;
  const filteredData = FilteredData({ category, type: "category", slug: "" });
  return { props: { res: filteredData, category } };
}

export default Index;
