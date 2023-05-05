import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'

import 'swiper/css'
import './Products.css'

import data from '../../utils/slider.json'

const Products = () => {
  return (
    <section className="products-wrapper">
     
          <div className="paddings innerWidth products-wrapper">
               <div className="flexColStart products-head">
                    <span className='redText'>Nossos produtos</span>
                    <span className='mostSearched-text'>Os mais procurados</span>
               </div>

               <Swiper>
                    {
                         data.map((card, i) => (
                              <SwiperSlide key={i}>
                              <div className="flexColStart products-card">
                                   <img src={card.image} alt="product" />
                                   <span>
                                        <span  className="product-price">$</span>
                                        <span>{card.price}</span>
                                   </span>
                                   
                                   <span>{card.name}</span>
                                   <span>{card.detail}</span>
                              </div>

                              </SwiperSlide>
                         ))
                    }
               </Swiper>
          </div>
    </section>
  )
}

export default Products