import Wrapper from './components/shared/wrapper'
import MainPage from './components/home'
import BASE_PATH_API from './shared/BasePath';
import ProductsCarousel from './components/home/productsCarousel';

async function fetchAllProductsData() {
  let res = await fetch(`${BASE_PATH_API}/api/products`);

  if(!res.ok)
    throw new Error("Failed to fetch")

  return res.json();
}

export default async function Home() {
  let response = await fetchAllProductsData();
  console.log("response: ", response)
  return (
    <div className="font-menu bg-white text-black">
      <Wrapper>
        <main>
          {/* <MainPage /> */}
          <ProductsCarousel />
        </main>
      </Wrapper>
    </div>
  )
}