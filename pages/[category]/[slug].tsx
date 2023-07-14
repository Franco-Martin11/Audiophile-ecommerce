import { PageLayout } from "@/components";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";
import dynamic from "next/dynamic";

interface ResponseItem {
  res: Product[];
}

export async function getServerSideProps(context: {
  params: { slug: any; category: any };
}) {
  const { slug, category } = context.params;
  const filteredData = FilteredData({ category, type: "category", slug });
  return { props: { res: filteredData } };
}

const Items = ({ res }: ResponseItem) => {
  const IndividualCardProduct = dynamic(
    () => import("../../components/IndividualCardProduct")
  );
  const [{ name }] = res;
  return (
    <PageLayout title={name} bgColor="white">
      {res.map((item) => (
        <IndividualCardProduct key={item.id} {...item} />
      ))}
    </PageLayout>
  );
};

export default Items;
