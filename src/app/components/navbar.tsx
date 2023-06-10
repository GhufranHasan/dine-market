import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'

const imageLink: string = '/Logo.png'

const menuItems = [
  { label: 'Female', href: '/female' },
  { label: 'Male', href: '/male' },
  { label: 'Kids', href: '/kids' },
];

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/"><Image src={imageLink} alt="Dine Market" width={140} height={25} /></Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 px-10">
                {menuItems.map((item) => (
                  <Link className="text-black px-3 py-2 rounded-md text-sm font-medium" key={item.href} href={item.href}>
                      {item.label}{' '}
                      <FaChevronDown className="inline-block h-3 w-3 text-gray-400 hover:rotate-180 duration-500" />
                  </Link>
                  ))
                }
                <Link className="text-black px-3 py-2 rounded-md text-sm font-medium" href="/all-products">
                  All Products
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block font-menu">
            <div className="ml-4 flex items-center md:ml-0">
              <div className="relative">
                <input
                  type="text"
                  className="w-full bg-white border-2 text-gray-700 rounded-lg pl-12 pr-48 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
                  placeholder="What you looking for"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiOutlineSearch className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-20">
            <button className=" h-12 w-12 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 focus:outline-none">
              <FiShoppingCart className="mx-auto h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar