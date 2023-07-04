import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

interface Cardprops {
  bgroundColor: string
  imageurl: string
  productTitle: string
  oldPrice: string
  newPrice: string
}

const Menpromocard:React.FC<Cardprops> = ({
  bgroundColor,
  imageurl,
  productTitle,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="mb-3 md:ml-8 h-[450px] md:w-72 w-full relative" style={{backgroundColor: bgroundColor}}>
      <Image className="w-full h-full" src={imageurl} alt="man image" width={500} height={500} />
      <div className="absolute top-3 px-4">
        <p className="font-normal text-base tracking-widest">{productTitle}</p>
        <div className="flex pt-1 tracking-widest">
            <p className="text-gray-600 text-base font-light line-through">{oldPrice}</p>
            <p className="text-xl mx-2">{newPrice}</p>
        </div>
        <div className="bg-white rounded-full w-fit ml-80 md:ml-48 mt-[19.5rem] p-4">
          <FaChevronRight />
        </div>
      </div>
    </div>
  )
}

export default Menpromocard