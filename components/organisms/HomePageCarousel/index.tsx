import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

// Components
import HomePageSlide from '../../molecules/HomePageSlide';


// Types
import { HomePageCarouselProps } from './home-page-carousel.types';
import { SwiperOptions } from 'swiper';

// Styles
import css from './home-page-carousel.module.scss';

SwiperCore.use([Pagination]);

const HomePageCarousel: React.FC<HomePageCarouselProps> = ({ slides = [] }) => {
    const options: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
    };

    return (
        <section className={css.container}>
            <Swiper {...options}>
                {slides.length > 0 &&
                    slides.map(slide => (
                        <SwiperSlide key={slide.id} className={css.slide}>
                            <HomePageSlide {...slide} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
};

export default HomePageCarousel;
