import React from 'react'
import FeaturePart from './mini-components/feature-part'
import Image from 'next/image'

const ProductOverview = () => {
  return (
    <div className="h-full">  
      <div className="flex">
        <div className="md:w-8/12">
        </div>
        <div className="px-6 md:pl-48 md:py-6">
          <p className="font-bold text-5xl tracking-wide md:text-6xl">Unique and Authentic Vintage Designer Jewellery</p>
        </div>
      </div>
      <div className="md:flex mt-6">
        <div className="w-full md:w-2/5 relative">
          <p className="font-bold text-[75px] md:text-[100px] text-gray-200 tracking-wide leading-tight z-0">Different from others</p>
          <div className="z-10 my-8 top-0 px-2 absolute grid grid-rows-2 grid-flow-col md:gap-4 auto-rows-max">
            <div className="w-3/4">
              <FeaturePart title="Using Good Quality Materials" />
            </div>
            <div className="my-1 w-3/4">
              <FeaturePart title="Modern Fashion Design" />
            </div>
            <div className="w-3/4">
              <FeaturePart title="100% Handmade Products" />
            </div>
            <div className="my-1 w-3/4">
              <FeaturePart title="discount for Bulk Orders" />
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="w-80 mx-auto md:w-1/2 mt-28 md:mt-0 md:ml-24">
            <Image src={'/images/pro_over.png'} alt={'white jacket dress'} width={500} height={500} />
          </div>
          <div className="md:w-1/2 ml-2 px-6 my-6 md:my-auto">
              <p className="text-justify text-sm tracking-widest">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
              <button className="mt-6 px-6 py-3 bg-black text-white font-semibold">See All Products</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductOverview