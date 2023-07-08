import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';
import Cardproduct from '../../components/shared/cardproduct';

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

export default function Page({ params }: { params: { slug: string } }) {
  const result = filterProductsByCategory(params.slug);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {result.length > 0 ? (
        result.map((product: Product) => (
          <Cardproduct
            key={product.itemId}
            id={product.itemId}
            imageUrl={product.imageUrl}
            alterText={product.imageText}
            prodTitle={product.title}
            prodCategory={product.category}
            prodPrice={product.price}
          />
        ))
      ) : (
        <p>No Product found</p>
      )}
    </div>
  );
}
