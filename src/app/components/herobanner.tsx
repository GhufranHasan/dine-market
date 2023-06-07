import React from 'react'
import Image from 'next/image'
import { BiCart } from 'react-icons/bi'

const herobanner = () => {
  return (
    <div className="flex max-w-7xl h-full mx-auto px-4 sm:px-6 py-12 lg:px-0 justify-between">
        {/* left side starts */}
        <div className="w-1/2">
            <div className="w-24 h-8 my-6 rounded-lg bg-blue-200 py-1">
                <span className="text-blue-700 font-semibold mx-3">Sale 70%</span>
            </div>
            <div className="py-6">
                <p className="text-7xl font-bold">An Industrial Take on Streetwear</p>
            </div>
            <div className="w-11/12 py-4">
                <p className="text-gray-600 text-2xl">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            </div>
            <div className="flex bg-black w-2/5 h-16 py-3 my-9 justify-evenly">
                <BiCart className="text-white text-4xl" />
                <button className="text-white font-bold py-2" type="submit">Start Shopping</button>
            </div>
            <div className="py-9">
                <Image src='/images/FeaturedList.png' width={700} height={300} alt='Featured List' />
            </div>
        </div>
        {/* left side ends */}
        {/* right side starts */}
        <div>
            <Image src='/images/hero1.png' width={675} height={675} alt='Girl in hero banner'/>
        </div>
        {/* right side ends */}
    </div>
  )
}

export default herobanner