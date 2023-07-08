import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';
import Cardproduct from '../../components/shared/cardproduct';

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
          <Cardproduct
            id={product.itemId}
            key={product.itemId}
            imageUrl={product.imageUrl}
            alterText={product.imageText}
            prodTitle={product.title}
            prodCategory={product.category}
            prodPrice={product.price}
          />
        ))
      }

      This is Product page for Product Id: {params.id}
    </div>
  );
}
