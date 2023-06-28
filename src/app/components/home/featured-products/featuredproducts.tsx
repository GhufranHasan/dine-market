import React from 'react'
import Commonhead from '../../shared/commonhead';
import Cardproduct from './mini-components/cardproduct';

const Featuredproducts = () => {
  return (
    <div className="font-bold">
        <Commonhead bluehead="PRODUCTS" mainhead="Check What We Have" />
        <div className="md:flex">
          {/* Left arrow */}
          {/* Code here */}
          {/* Product 1 */}
          <div className="">
            <Cardproduct imageUrl="/images/home-images/pro1.png" alterText="black long dress" prodTitle="Brushed Raglan Sweatshirt" prodCategory="Long Dress" prodPrice="$195.00" />
          </div>
          {/* Product 2 */}
          <div>
            <Cardproduct imageUrl="/images/home-images/pro2.png" alterText="white jacket" prodTitle="Brushed Bomber" prodCategory="Jacket" prodPrice="$225.00" />
          </div>
          {/* Product 3 */}
          <div>
            <Cardproduct imageUrl="/images/home-images/pro3.png" alterText="gray long dress" prodTitle="Flex Sweatshirt" prodCategory="Long Dress" prodPrice="$175.00" />
          </div>
          {/* Right arrow */}
          {/* Code here */}
        </div>
    </div>

  )
}

export default Featuredproducts