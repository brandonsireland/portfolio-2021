import React from 'react';
import cc from 'classcat';

import { CarouselProps } from './carousel.types';

import css from './carousel.module.scss';

class Carousel extends React.Component<CarouselProps> {
    private carouselMainRef: React.RefObject<any>;
    private carouselNavRef: React.RefObject<any>;
    flktyCarousel: any;
    flktyNavCarousel: any;

    constructor(props: CarouselProps) {
        super(props);
        this.carouselMainRef = React.createRef();
        this.carouselNavRef = React.createRef();
    }

    componentDidMount() {
        const { options, navOptions, renderNav, passMeCarousel } = this.props;
        try {
            const Flickity = require('flickity');
            require('flickity-fullscreen');
            require('flickity-imagesloaded');

            if (renderNav) {
                require('flickity-as-nav-for');
            }

            this.flktyCarousel = new Flickity(this.carouselMainRef.current, {
                imagesLoaded: true,
                ...options,
            });

            if (passMeCarousel) {
                passMeCarousel(this.flktyCarousel);
            }

            if (renderNav) {
                this.flktyNavCarousel = new Flickity(
                    this.carouselNavRef.current,
                    {
                        imagesLoaded: true,
                        ...navOptions,
                        asNavFor: this.carouselMainRef.current,
                        contain: true,
                        pageDots: false,
                    },
                );

                if (
                    this.flktyNavCarousel.selectedElements.length >=
                    this.flktyNavCarousel.cells.length
                ) {
                    this.carouselNavRef.current.classList.add(
                        'no-prev-next-buttons',
                    );
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        if (this.flktyCarousel) {
            this.flktyCarousel.destroy();
        }

        if (this.flktyNavCarousel) {
            this.flktyNavCarousel.destroy();
        }
    }

    render() {
        const {
            className,
            carouselClassName,
            itemWidth,
            itemClassName = '',
            children,
            width,
            height,
        } = this.props;

        const aspect = width && height;

        const classes = cc(['carousel', className, css.container]);
        const slideClasses = cc([css.cell, itemClassName]);
        
        return (
            <div className={classes}>
                {aspect && (
                    <span
                        className='carousel-placeholder'
                        style={{
                            paddingTop:
                                width && height && `${(height / width) * 100}%`,
                        }}
                    />
                )}
                <div className='carousel-inner'>
                    <div
                        className={carouselClassName}
                        ref={this.carouselMainRef}
                    >
                        {React.Children.map(children, child => (
                            <div
                                className={slideClasses}
                                style={{ width: itemWidth }}
                            >
                                {child}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
