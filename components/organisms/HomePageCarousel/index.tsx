import React, { useRef } from 'react';
import cc from 'classcat';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

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
    const navigationPrevRef = useRef<HTMLDivElement>(null);
    const navigationNextRef = useRef<HTMLDivElement>(null);

    const options: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        navigation: {
            prevEl: navigationPrevRef.current!,
            nextEl: navigationNextRef.current!,
        },
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
                <div
                    ref={navigationPrevRef}
                    className={cc([css.arrow, css.arrowLeft])}
                >
                    <Icon
                        className={css.left}
                        icon={IconType['Carot']}
                        alt='Previous Item Button'
                    />
                </div>
                <div
                    ref={navigationNextRef}
                    className={cc([css.arrow, css.arrowRight])}
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
