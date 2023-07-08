import React from 'react';
import Link from 'next/link';
import Commonhead from '../../shared/commonhead';
import Cardproduct from '../../shared/cardproduct';
import { ProductCategory, Product } from '@/app/utils/type';
import  productData from '../../../data/productData';

const Featuredproducts = () => {
  // Filter the featured products from the productData array
  const featuredProducts: Product[] = productData
    .flatMap((category: ProductCategory) => category.details)
    .filter((product: Product) => product.featured);

  return (
    <div className="font-bold">
      <Commonhead bluehead="PRODUCTS" mainhead="Check What We Have" />
      <div className="md:flex">
        {/* Featured Products */}
        {featuredProducts.map((product: Product) => (
          <div key={product.itemId}>
            <Cardproduct
              id={product.itemId}
              imageUrl={product.imageUrl}
              alterText={product.imageText}
              prodTitle={product.title}
              prodCategory={product.category}
              prodPrice={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredproducts;
