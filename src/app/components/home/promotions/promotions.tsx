import React from 'react'
import Image from 'next/image'
import Commonhead from '../../shared/commonhead';
import Menpromocard from './mini-components/menpromocard';

const girl: string = "/images/home-images/blackdress-girl.png";

const Promotions = () => {
  return (
    <div className="py-12 md:py-36 font-bold">
      <Commonhead bluehead="PROMOTIONS" mainhead="Our Promotions Events" />
      <div className="my-6 flex flex-col md:flex-row">
        {/* left side starts */}
        <div className="md:w-1/2">
          <div className="bg-gray-300 flex flex-col md:flex-row items-center md:w-full justify-between">
            <div className="pt-2 md:px-10 text-left">
              <p className="text-2xl md:text-3xl">GET UP TO <span className="font-extrabold">60%</span></p>
              <p className="font-normal md:text-xl tracking-wider">For the summer season</p>
            </div>
            <div className="md:w-1/2">
              <Image className="md:px-0 sm:justify-center" src={girl} alt="Black dress girl" width={282} height={218} />
            </div>
          </div>
          <div className="bg-black text-white my-4">
            <div className="p-9 text-center">
              <p className="text-3xl md:text-4xl md:font-extrabold">GET 30% Off</p>
              <p className="font-normal text-sm md:text-md tracking-wider pt-6">USE PROMO CODE</p>
              <div className="bg-gray-600 w-44 md:w-80 px-2 mx-auto py-2 my-2 rounded-lg">
                <span className="font-light md:tracking-[.25em]">DINEWEEKENDSALE</span>
              </div>
            </div>
          </div>
        </div>
        {/* left side ends */}
        {/* right side starts */}
        <div className="md:w-1/2 md:flex">
          <div className="flex flex-wrap">
            <Menpromocard bgroundColor="#EFE1C7" imageurl="/images/home-images/blueshirt.png" productTitle="Flex Sweatshirt" oldPrice="$100.00" newPrice="$75.00" />
            <Menpromocard bgroundColor="#D7D7D9" imageurl="/images/home-images/grayshirt.png" productTitle="Flex Push Button Bomber" oldPrice="$225.00" newPrice="$190.00" />
          </div>
        </div>
        {/* right side ends */}
      </div>
    </div>
  )
}

export default Promotions