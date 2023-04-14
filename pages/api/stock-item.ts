import { NextApiRequest, NextApiResponse } from "next";
import data from "../../constant/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { slug, category } = req.query;
  if (!category && !slug) {
    return res.status(400).json({ message: "Missing parameters" });
  }

  const filteredData = data.filter((item) => {
    return (
      (!category || item.category === category) && (!slug || item.slug === slug)
    );
  });

  if (filteredData.length === 0) {
    return res.status(404).json({ message: "No items found" });
  }

  return res.status(200).json(filteredData);
}
