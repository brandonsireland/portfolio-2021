import React from 'react';

// Components
import Carousel from '../../atoms/Carousel';
import HomePageSlide from '../../molecules/HomePageSlide';

// Types
import { HomePageCarouselProps } from './home-page-carousel.types';

// Styles
import css from './home-page-carousel.module.scss';

const HomePageCarousel: React.FC<HomePageCarouselProps> = ({ slides = [] }) => {
    const options = {
        draggable: true,
        pageDots: false,
        wrapAround: true,
        cellAlign: 'center',
        prevNextButtons: false,
        lazyLoad: true,
    };

    return (
        <section className={css.container}>
            <Carousel
                options={options}
                itemClassName={css.slide}
                carouselClassName={css.carousel}
            >
                {slides.length > 0 &&
                    slides.map(slide => (
                        <HomePageSlide key={slide.id} {...slide} />
                    ))}
            </Carousel>
        </section>
    );
};

export default HomePageCarousel;
