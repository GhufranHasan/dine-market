import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';
// import Cardproduct from '../../components/shared/cardproduct';
import Image from 'next/image';

export function getProjectDetails(id: number | string): Product[] {
  const filteredCategory = productData.find(
    (productCategory: ProductCategory) =>
      productCategory.proCatId === id
  );

  const sortedProducts = filteredCategory
    ? filteredCategory.details.sort((a: Product, b: Product) =>
        a.title.localeCompare(b.title)
      )
    : [];

  return sortedProducts;
}

export default function Page({ params }: { params: { id: string } }) {
  const result = getProjectDetails(params.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      { result.map((product: Product) => (
          // <Cardproduct
          //   id={product.itemId}
          //   key={product.itemId}
          //   imageUrl={product.imageUrl}
          //   alterText={product.imageText}
          //   prodTitle={product.title}
          //   prodCategory={product.category}
          //   prodPrice={product.price}
          // />
          <div key={product.itemId} className="flex justify-between gap-6">
            <div>
              <Image src={product.imageUrl} alt={product.imageText} />
            </div>
            <div>
              Product Detail
              <p>Name: {product.title}</p>
              <p>Category: {product.category}</p>
              <p>Price: {product.price}</p>
            </div>
          </div>
        ))
      }

      This is Product page for Product Id: {params.id}
    </div>
  );
}
