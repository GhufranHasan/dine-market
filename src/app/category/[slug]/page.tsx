import { Product } from '@/app/utils/type';
import Cardproduct from '../../components/shared/cardproduct';
import { filterProductsByCategory } from '@/app/utils/productUtils'; // Update this import

export default function CategoryPage({ params }: { params: { slug: string } }) {
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
