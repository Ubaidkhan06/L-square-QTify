import React from 'react'
import { useSwiper } from 'swiper/react'
import rightArrow from '../../../assets/rightArrow.svg'


const CarouselRightButton = () => {

    const swiper = useSwiper()

  return (
    <div style={{
        position : 'absolute',
        top:'40%',
        right:  0,
        zIndex : '1',
        transform: 'translateY(-50%)'

    }}
        onClick={() => swiper.slideNext()}
        >
        <img src={rightArrow} alt="rightArrow" />
    </div>
  )
}

export default CarouselRightButton