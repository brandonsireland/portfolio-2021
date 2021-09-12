import React, { useRef } from 'react';
import cc from 'classcat';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper';
// Components
import HomePageSlide from '../../molecules/HomePageSlide';
import Icon from '../../atoms/Icon';

// Types
import { HomePageCarouselProps } from './home-page-carousel.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Styles
import css from './home-page-carousel.module.scss';

SwiperCore.use([Navigation]);

const HomePageCarousel: React.FC<HomePageCarouselProps> = ({ slides = [] }) => {
    const prevRef = useRef<HTMLDivElement>(null);
    const nextRef = useRef<HTMLDivElement>(null)

    const options: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
    };
    
    return (
        <section className={css.container}>
            <Swiper {...options}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
                onInit={(swiper) => {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init(); // throws error here, navigation is undefined
                swiper.navigation.update();
            }}
            >
                {slides.length > 0 &&
                    slides.map(slide => (
                        <SwiperSlide key={slide.id} className={css.slide}>
                            <HomePageSlide {...slide} />
                        </SwiperSlide>
                    ))}
                <div
                    ref={prevRef}
                    className={cc([css.arrow, css.arrowLeft])}
                >
                    <Icon
                        className={css.left}
                        icon={IconType['Carot']}
                        alt='Previous Item Button'
                    />
                </div>
                <div
                    ref={nextRef}
                    className={cc([css.arrow, css.arrowRight])}
                    onClick={() => console.log('clicked')}
                >
                    <Icon
                        icon={IconType['Carot']}
                        alt='Previous Item Button'
                    />
                </div>
            </Swiper>
        </section>
    );
};

export default HomePageCarousel;
