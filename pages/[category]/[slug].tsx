import { PageLayout } from "@/components";
import IndividualCardProduct from "@/components/IndividualCardProduct";
import { Product } from "@/types/type";
import FilteredData from "@/utils/FilteredData";

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
