import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

let imageLink: string = '/Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/"><Image src={imageLink} alt='Dine Market' width={120} height={65} /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 px-12">
                <Link className="text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/female">
                  Female
                </Link>
                <Link className="text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/male">
                  Male
                </Link>
                <Link className="text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/kids">
                  Kids
                </Link>
                <Link className="text-black hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/all-products">
                  All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar