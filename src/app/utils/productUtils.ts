import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';

export function filterProductsByCategory(category: string): Product[] {
  const filteredCategory = productData.find(
    (productCategory: ProductCategory) =>
      productCategory.label.toLowerCase() === category.toLowerCase()
  );

  const sortedProducts = filteredCategory
    ? filteredCategory.details.sort((a: Product, b: Product) =>
        a.title.localeCompare(b.title)
      )
    : [];

  return sortedProducts;
}