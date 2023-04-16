import data from "../constant/data.json";

type Props = { category: string; slug: string; type: string };
const FilteredData = ({ category, slug, type }: Props) => {
  const filteredData = data.filter((item) => {
    type === "category" && (!category || item.category === category);
    return (
      (!category || item.category === category) && (!slug || item.slug === slug)
    );
  });
  return filteredData;
};

export default FilteredData;
