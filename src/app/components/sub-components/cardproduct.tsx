import React from 'react'
import Image from 'next/image'

interface CardProps {
  imageUrl: string
  alterText: string
  prodTitle: string
  prodCategory: string
  prodPrice: string
}

const Cardproduct: React.FC<CardProps> = ({
  imageUrl,
  alterText,
  prodTitle,
  prodCategory,
  prodPrice
}) => {
  return (
    <div className="px-8 pt-6 md:py-11 transition-transform duration-300 hover:scale-110">
      <div className="w-auto">
        <Image src={imageUrl} alt={alterText} width={380} height={400} />
      </div>
      <div className="py-4">
        <p className="tracking-widest">{prodTitle}</p>
        <p className="text-gray-500">{prodCategory}</p>
        <div className="py-4">
          <p className="text-lg">{prodPrice}</p>
        </div>
      </div>
    </div>
  )
}

export default Cardproduct