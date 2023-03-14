// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CaraouselLeftButton from './CarouselLeftButton/CaraouselLeftButton';
import CarouselRightButton from './CarouselRightButton/CarouselRightButton';

const Caraousel = ({ data, renderComponent, isButton }) => {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}  
        >
            {isButton ? <CaraouselLeftButton />: null}
        
            {data?.map(item => <SwiperSlide>{renderComponent(item)}</SwiperSlide>)}

            {isButton ? <CarouselRightButton />: null}

        </Swiper>
    );
};

export default Caraousel