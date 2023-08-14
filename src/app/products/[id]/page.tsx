import { ProductCategory, Product } from '@/app/utils/type';
import productData from '@/app/data/productData';
import Image from 'next/image';
import Quantity from '@/app/components/shared/quantity';
import { BiCart } from 'react-icons/bi'

const getProjectDetails = (id: number | string): Product[] => {
  const filteredProducts: Product[] = [];
  productData.forEach((category: ProductCategory) => {
    const matchingProducts = category.details.filter(
      (product: Product) => product.itemId === Number(id)
    );
    filteredProducts.push(...matchingProducts);
  });
  return filteredProducts;
};

const sizes = ["xs", "s", "m", "l", "xl"]

export default function Page({ params }: { params: { id: string } }) {
  const result = getProjectDetails(params.id);

  return (
    <div className="flex justify-between mt-16 py-10 flex-wrap">
      {result.map((product: Product) => (
        <div key={product.itemId} className="flex justify-evenly gap-6 w-full">
          <div className="sm:h-full">
            <Image src={product.imageUrl} alt={product.imageText} width={400} height={400} />
          </div>
          <div className="w-full md:w-[80%]">
            <div>
              <h1 className="text-2xl">{product.title}</h1>
              <h2 className="text-base font-semibold text-gray-400">{product.category}</h2>
            </div>
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              <div className="flex gap-x-3">
                {sizes.map((item) => (
                  <div className="flex items-center justify-center w-6 h-6 mt-2 duration-300 border rounded-full hover:shadow-xl" key={item}>
                    <span className="text-[10px] font-semibold text-center text-gray-600">{item.toUpperCase()}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center mt-6 gap-x-3">
                <h3 className="text-[10px] font-semibold">Quantity:</h3>
                <Quantity />
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex bg-black h-20 md:w-[15%] w-full md:h-14 py-3 px-2 my-9 text-center justify-evenly space-x-2">
                  <BiCart className="text-white text-2xl my-auto md:text-2xl" />
                  <button className="text-white text-sm font-semibold py-1 md:py-2" type="submit">Add To Cart</button>
                </div>
                <h2 className="text-2xl font-bold">${product.price.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
