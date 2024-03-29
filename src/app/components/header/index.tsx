"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import menuItems from '@/app/data/menuData';

const imageLink: string = '/Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0">
        <div className="flex items-center md:absolute justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src={imageLink} alt="Dine Market" width={140} height={25} />
              </Link>
            </div>
            <div className="hidden md:block z-30">
              <div className="ml-10 flex items-baseline space-x-4 px-10">
              {menuItems.map((item) => (
              <div className="group relative" key={item.href}>
                <Link className="text-black px-3 py-2 rounded-md text-sm font-medium" href={item.href}>
                  {item.label}{' '}
                  <FaChevronDown className="inline-block h-3 w-3 text-gray-400 hover:rotate-180 duration-500" />
                </Link>
                <div>
                  {item.sections && item.featured && (
                    <div className="flex invisible group-hover:visible absolute mt-2 p-2 bg-white w-[975px] h-auto border border-gray-500 transition-all transform scale-95 origin-top-right">
                      {item.sections.map((sectionItem) => (
                        <div className="" key={sectionItem.id}>
                          <div key={sectionItem.name} className="flex-col text-black px-4 py-4">
                            <p className="font-semibold">{sectionItem.name}</p>
                            <div>
                              {sectionItem.items && (
                                <ul>
                                  {sectionItem.items.map((secItem) => (
                                    <li className="pb-2 hover:text-gray-500" key={secItem.href}><Link href={secItem.href}>{secItem.name}</Link></li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      {item.featured.map((featuredItem) => (
                    <div key={featuredItem.name} className="mb-4 px-4 pt-6 transition-transform duration-500 delay-${index + 1}00 transform translate-y-[-20px]">
                      <Link href={featuredItem.href}>
                        <Image src={featuredItem.imageSrc} alt={featuredItem.imageAlt} width={600} height={600} />
                      </Link>
                      <Link href={featuredItem.href} className="text-sm font-medium text-gray-700">
                        {featuredItem.name}
                      </Link>
                    </div>
                  ))}
                  </div>
                )}
              </div>
        </div>
      ))}
          <Link className="text-black px-3 py-2 rounded-md text-sm font-medium" href="/products">
            All Products
          </Link>
        </div>
      </div>
    </div>
    <div className="md:hidden">
      <button
        className="h-6 w-6 flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={handleMobileMenuToggle}
      >
        {isMobileMenuOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>
    </div>
    <div className="hidden md:block font-menu">
      <div className="ml-4 flex items-center md:ml-0">
        <div className="relative">
          <input
            type="text"
            className="w-full bg-transparent border-2 text-gray-700 rounded-lg pl-8 pr-48 py-1 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-white"
            placeholder="What you looking for"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AiOutlineSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
    <div className="hidden md:block md:mx-20">
      <button className="h-12 w-12 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 focus:outline-none">
        <FiShoppingCart className="mx-auto h-6 w-6" />
      </button>
    </div>
  </div>
  {isMobileMenuOpen && (
    <div className={`mt-2 flex flex-col md:hidden transition-transform duration-500 ${
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-gray-700 px-4 py-2"
        >
          {item.label}{' '}
          <FaChevronDown className="inline-block h-3 w-3 text-gray-400 hover:rotate-180 duration-500" />
        </Link>
      ))}
      <Link className="text-gray-700 px-4 py-2 hover:bg-black hover:text-white" href="/products">
        All Products
      </Link>
      <button className="mt-4 h-12 w-12 rounded-full bg-gray-100 text-gray-700 hover:text-gray-900 focus:outline-none">
        <FiShoppingCart className="mx-auto h-6 w-6" />
      </button>
    </div>
  )}
</div>
</nav>
);
};

export default Navbar;