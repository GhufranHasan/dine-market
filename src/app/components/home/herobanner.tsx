import React from 'react'
import Image from 'next/image'
import { BiCart } from 'react-icons/bi'

const herobanner = () => {
  return (
    <div className="flex flex-col md:flex-row">
        {/* left side starts */}
        <div className="md:w-1/2">
            <div className="w-24 h-8 my-6 rounded-lg bg-blue-200 py-1">
                <span className="text-blue-700 font-semibold mx-3">Sale 70%</span>
            </div>
            <div className="py-6">
                <p className="font-bold text-5xl tracking-wide md:text-6xl">An Industrial Take on Streetwear</p>
            </div>
            <div className="md:w-9/12 py-4">
                <p className="text-gray-500 tracking-wide text-xl">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            </div>
            <div className="flex bg-black h-20 md:w-[45%] w-full md:h-16 py-3 my-9 text-center justify-center space-x-2">
                <BiCart className="text-white text-3xl my-auto md:text-4xl" />
                <button className="text-white font-bold py-1 md:py-2" type="submit">Start Shopping</button>
            </div>
            <div className="py-9">
                <Image src='/images/home-images/FeaturedList.png' width={700} height={300} alt='Featured List' />
            </div>
        </div>
        {/* left side ends */}
        {/* right side starts */}
        <div className="justify-items-center">
            <Image src='/images/home-images/hero1.png' width={675} height={675} alt='Girl in hero banner'/>
        </div>
        {/* right side ends */}
    </div>
  )
}

export default herobanner