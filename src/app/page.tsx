import Navbar from './components/navbar'
import Herobanner from './components/herobanner'
import Promotions from './components/promotions'

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
        </div>
      </main>
    </div>
  )
}