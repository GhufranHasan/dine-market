import Navbar from './components/navbar'
import Herobanner from './components/herobanner'

// const mainPageStyles = {
//   backgroundColor: '#ffffff',
// };

export default function Home() {
  return (
    <div className='font-menu'>
      <header>
        <Navbar />
      </header>
      <main className='bg-white text-black'>
        <Herobanner />
      </main>
    </div>
  )
}