import React from 'react'
import Herobanner from './herobanner'
import Promotions from './promotions/promotions'
import Featuredproducts from './featured-products/featuredproducts'
import ProductOverview from './product-overview/productoverview'
import Newsletter from './newsletter'

const MainPage = () => {
  return (
    <div>  
        <Herobanner />
        <Promotions />
        <Featuredproducts />
        <ProductOverview />
        <Newsletter />
    </div>
  )
}

export default MainPage