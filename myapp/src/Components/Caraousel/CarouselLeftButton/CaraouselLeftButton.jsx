import React from 'react'
import { useSwiper } from 'swiper/react'
import leftArrow from '../../../assets/leftArrow.svg'


const CaraouselLeftButton = () => {

    const swiper = useSwiper()

    return (

        <div style={{
            position: 'absolute',
            top: '40%',
            left: 0,
            zIndex: 10,
            transform: 'translateY(-50%)'
        }} 
        onClick={() => swiper.slidePrev()}
        >
            <img src={leftArrow} alt="leftArrow" />
        </div>
    )
}

export default CaraouselLeftButton