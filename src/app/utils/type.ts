export type Product = {
    itemId: number;
    title: string;
    category: string;
    price: number;
    imageUrl: string;
    imageText: string;
    featured: boolean;
  };
  
  export type ProductCategory = {
    proCatId: number;
    label: string;
    href: string;
    details: Product[];
  };
  