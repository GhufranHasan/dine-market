import React from 'react';
import productData from '@/app/data/productData';
import Cardproduct from '../shared/cardproduct';

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {productData.map((proItem) => (
        proItem.details &&
        proItem.details.map((psubItem) => (
          <Cardproduct imageUrl={psubItem.imageUrl} alterText={psubItem.imageText} prodTitle={psubItem.title} prodCategory={psubItem.category} prodPrice={psubItem.price} />
        ))
      ))}
    </div>
  );
};

export default ProductList;