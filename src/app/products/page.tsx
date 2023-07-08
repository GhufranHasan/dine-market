import React from 'react';
import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';
import Cardproduct from '@/app/components/shared/cardproduct';

const ProductList = () => {
  const allProducts: Product[] = productData.flatMap((category: ProductCategory) => category.details);

  // Sort the products in ascending alphabetical order based on the title
  allProducts.sort((a: Product, b: Product) => a.title.localeCompare(b.title));

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {allProducts.map((product: Product) => (
        <Cardproduct
          key={product.itemId}
          imageUrl={product.imageUrl}
          alterText={product.imageText}
          prodTitle={product.title}
          prodCategory={product.category}
          prodPrice={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
