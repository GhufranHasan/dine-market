import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/header'
import Footer from '@/app/components/footer'
import Wrapper from './components/shared/wrapper'

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
        <main className="bg-white text-black">
          <Wrapper>       
            {children}
          </Wrapper>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
