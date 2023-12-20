import { NextPage } from "next";
import { chakra } from "@chakra-ui/react";
import { PageLayout, HeadingBanner, ProductCard, GoBack } from "@/components";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";
import ErrorPageLayout from "@/components/Layout/ErrorPageLayout";

interface Props {
  res: Product[];
  category: string;
}

const Index: NextPage<Props> = ({ res, category }) => {
  if (res.length === 0)
    return <ErrorPageLayout description={"category"} category={category} />;
  return (
    <PageLayout title={category} bgColor="bg">
      <HeadingBanner categoryTitle={category} />
      <chakra.div display={"flex"} flexDir={"column"} gap={8} bg="bg" p={8}>
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
      </chakra.div>
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
