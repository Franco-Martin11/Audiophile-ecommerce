import { NextApiRequest, NextApiResponse } from "next";
import data from "../../constant/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //   res.setHeader("Cache-Control", "s-maxage=86400");
  if (req.method === "GET") {
    const { category } = req.query;

    if (category) {
      const stock = data.filter((stock) => stock.category === category);
      stock
        ? res.status(200).json(stock)
        : res.status(404).json({ message: "Category not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
