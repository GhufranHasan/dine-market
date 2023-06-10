import React from 'react'
import Image from 'next/image'
import Commonhead from './sub-components/commonhead';

const girl: string = "/images/blackdress-girl.png";

const Promotions = () => {
  return (
    <div className="py-12 md:py-36 font-bold">
      <Commonhead bluehead="PROMOTIONS" mainhead="Our Promotions Events" />
      <div className="my-6">
        {/* left side starts */}
        <div className="flex-col">
          <div className="bg-gray-300 flex items-center w-1/2 justify-between">
            <div className="px-12 text-center">
              <p className="text-3xl">GET UP TO <span className="font-extrabold">60%</span></p>
              <p className="font-normal text-xl tracking-wider">For the summer season</p>
            </div>
            <div>
              <Image src={girl} alt="Black dress girl" width={282} height={218} />
            </div>
          </div>
          <div className="bg-black text-white my-4 items-center w-1/2">
            <div className="p-9 text-center">
              <p className="text-4xl font-extrabold">GET 30% Off</p>
              <p className="font-normal text-md tracking-wider pt-6">USE PROMO CODE</p>
              <div className="bg-gray-600 w-80 px-2 mx-auto py-2 my-2 rounded-lg">
                <span className="font-light tracking-[.25em]">DINEWEEKENDSALE</span>
              </div>
            </div>
          </div>
        </div>
        {/* left side ends */}
        {/* right side starts */}

        {/* right side ends */}
      </div>
    </div>
  )
}

export default Promotions