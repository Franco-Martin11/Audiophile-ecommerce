export interface Product {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  image: Image;
  cartImage: string;
  category: string;
  categoryImage: Image;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includedItems: IncludedItem[];
  gallery: Image[];
  others: Other[];
}
export interface Other {
  slug: string;
  name: string;
  image: Image;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Category {
  titleCategory: string;
  routePath: string;
  imagePath: string;
}
