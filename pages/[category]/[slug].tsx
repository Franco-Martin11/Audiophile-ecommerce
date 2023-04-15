import { PageLayout } from "@/components";
import IndividualCardProduct from "@/components/IndividualCardProduct";
import { Product } from "@/types/type";


export const getServerSideProps = async (context: {
  params:
    | PromiseLike<{ slug: any; category: any }>
    | { slug: any; category: any };
}) => {
  const { slug, category } = await context.params;
  const data = await fetch(
    `http://localhost:3000/api/stock-item?slug=${slug}&category=${category}`
  );
  const res = await data.json();
  return { props: { res } };
};
interface Res {
  res: Product[];
}
const Items = ({ res }: Res): JSX.Element => {
  const [{ name }] = res;
  return (
    <PageLayout title={name} bgColor={"white"}>
      {res.map((item: Product) => (
        <IndividualCardProduct
          key={item.id}
          slug={item.slug}
          name={item.name}
          shortName={item.shortName}
          image={item.image}
          cartImage={item.cartImage}
          category={item.category}
          categoryImage={item.categoryImage}
          new={item.new}
          price={item.price}
          description={item.description}
          features={item.features}
          includedItems={item.includedItems}
          gallery={item.gallery}
          others={item.others}
          id={item.id}
        />
      ))}
    </PageLayout>
  );
};

export default Items;
