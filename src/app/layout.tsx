import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/header'
import Wrapper from './components/shared/wrapper'
import ProductList from './components/productList'
import MainPage from './components/home'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market | Clothing Sale',
  description: 'E-Commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>  
          <Navbar />
        </header>
        <div className="font-menu bg-white text-black">
          <Wrapper>
            <main>
              {/* <MainPage /> */}
              <ProductList />
            </main>
            {children}
          </Wrapper>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  )
}
