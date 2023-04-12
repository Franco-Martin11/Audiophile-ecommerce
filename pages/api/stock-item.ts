import { NextApiRequest, NextApiResponse } from "next";
import data from "../../constant/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id, category } = req.query;
  if (!category && !id) {
    return res.status(400).json({ message: "Missing parameters" });
  }

  const filteredData = data.filter((item) => {
    return (
      (!category || item.category === category) &&
      (!id || item.id === Number(id))
    );
  });

  if (filteredData.length === 0) {
    return res.status(404).json({ message: "No items found" });
  }

  return res.status(200).json(filteredData);
}