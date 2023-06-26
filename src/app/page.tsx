import Navbar from './components/header/navbar'
import Herobanner from './components/herobanner'
import Promotions from './components/promotions'
import Featuredproducts from './components/featuredproducts'
import ProductOverview from './components/productoverview'
import Newsletter from './components/newsletter'
import Footer from './components/footer/page-links'

// const mainPageStyles = {
//   backgroundColor: '#ffffff',
// };

export default function Home() {
  return (
    <div className="font-menu">
      <header>
        <Navbar />
      </header>
      <main className="bg-white text-black">
        <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0 justify-between">  
          <Herobanner />
          <Promotions />
          <Featuredproducts />
          <ProductOverview />
          <Newsletter />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}