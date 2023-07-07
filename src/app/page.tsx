import Wrapper from './components/shared/wrapper'
import MainPage from './components/home'
import ProductList from './components/productList'

export default function Home() {
  return (
    <div className="font-menu bg-white text-black">
      <Wrapper>
        <main>
          {/* <MainPage /> */}
          <ProductList />
        </main>
      </Wrapper>
    </div>
  )
}