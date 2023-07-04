export interface ProductDetail {
    id: number;
    imageUrl: string;
    imageText: string;
    title: string;
    category: string;
    price: number;
  }
  
  export interface Product {
    label: string;
    href: string;
    featured: {
      name: string;
      href: string;
      imageSrc: string;
      imageAlt: string;
    }[];
    sections: {
      id: string;
      name: string;
      items: {
        name: string;
        href: string;
      }[];
    }[];
  }
  