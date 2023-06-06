import Navbar from './components/navbar'

// const mainPageStyles = {
//   backgroundColor: '#ffffff',
// };

export default function Home() {
  return (
    <div>
      <header className='font-menu'>
        <Navbar />
      </header>
      <main className='bg-white text-black'>
        <h1>Welcome to the Home Page</h1>
      </main>
    </div>
  )
}