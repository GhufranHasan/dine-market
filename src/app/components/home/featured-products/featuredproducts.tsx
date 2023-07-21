"use client";
import React from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider-arrows.css';

import Commonhead from '../../shared/commonhead';
import Cardproduct from '../../shared/cardproduct';
import { ProductCategory, Product } from '@/app/utils/type';
import productData from '../../../data/productData';

// Install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

const Featuredproducts = () => {
  // Filter the featured products from the productData array
  const featuredProducts: Product[] = productData
    .flatMap((category: ProductCategory) => category.details)
    .filter((product: Product) => product.featured);

  return (
    <div className="font-bold">
      <Commonhead bluehead="PRODUCTS" mainhead="Check What We Have" />
      <div className="md:flex">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          loop
        >
          {/* Featured Products */}
          {featuredProducts.map((product: Product) => (
            <SwiperSlide key={product.itemId}>
              <Cardproduct
                id={product.itemId}
                imageUrl={product.imageUrl}
                alterText={product.imageText}
                prodTitle={product.title}
                prodCategory={product.category}
                prodPrice={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featuredproducts;
