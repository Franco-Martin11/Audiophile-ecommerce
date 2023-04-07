import { NextApiRequest, NextApiResponse } from "next";
import data from "../../constant/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   res.setHeader("Cache-Control", "s-maxage=86400");
  if (req.method === "GET") {
    const { id, category } = req.query;
    if (!category && !id) {
      return res.status(405).json({ message: "Method not allowed" });
    }

    let filteredData = data;

    if (category) {
      filteredData = filteredData.filter(
        (element) => element.category === category
      );
      if (filteredData.length === 0) {
        return res.status(404).json({ message: "Category not found" });
      }
    }

    if (id) {
      filteredData = filteredData.filter(
        (element) => element.id === Number(id)
      );
      if (filteredData.length === 0) {
        return res.status(404).json({ message: "Product not found" });
      }
    }

    return res.status(200).json(filteredData);
  }
}
