import { PageLayout } from "@/components";
import ErrorPageLayout from "@/components/Layout/ErrorPageLayout";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";
import { chakra } from "@chakra-ui/react";
import dynamic from "next/dynamic";

interface ResponseItem {
  res: Product[];
}

export async function getServerSideProps(context: {
  params: { slug: any; category: any };
}) {
  try {
    const { slug, category } = context.params;
    const filteredData = FilteredData({ category, type: "category", slug });
    return { props: { res: filteredData, slug } };
  } catch (error) {
    // Handle the error, e.g., log it, redirect to an error page, etc.
    console.error("Error fetching data:", error);
    return { props: { res: [] } }; // You may want to provide a default value or an empty array for res
  }
}

const Items = ({ res }: ResponseItem) => {
  const IndividualCardProduct = dynamic(
    () => import("../../components/IndividualCardProduct")
  );
  const nameSlugFilter = res.filter((data) => {
    return data.name, data.slug;
  });

  if (nameSlugFilter.length == 0)
    return <ErrorPageLayout description={"Item"} />;

  return (
    <>
      {res.map((item) => (
        <PageLayout key={item.id} title={item.name} bgColor="white">
          <IndividualCardProduct {...item} />
        </PageLayout>
      ))}{" "}
    </>
  );
};

export default Items;
