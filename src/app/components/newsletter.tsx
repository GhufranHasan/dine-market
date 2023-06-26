import React from 'react'

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center h-full py-48">
        <p className="font-bold text-[50px] md:text-[100px] text-gray-200 tracking-wide leading-tight z-0">Newsletter</p>
        <div className="absolute z-10 pb-2">
            <p className=" font-bold text-4xl text-center leading-snug">Subscribe Our Newsletter</p>
            <p className="text-center px-8 font-light tracking-widest md:tracking-wider py-4">Get the latest information and promo offers directly</p>
            <form className="flex flex-col md:flex-row items-center md:h-10 my-6">
              <input type="text" className="bg-white border-2 border-gray-500 h-10 md:h-full mx-4 md:mx-2 pl-6 pr-12 mb-2 md:mb-0 md:w-80" placeholder="Input email address" />
              <button className="h-full px-4 py-2 bg-black text-white font-semibold">Get Started</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter