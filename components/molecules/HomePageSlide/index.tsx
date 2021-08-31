import React from 'react';

// Components
import BasePicture from '../../atoms/BasePicture';
import BaseLink from '../../atoms/BaseLink';
import Backdrop from '../../atoms/Backdrop';

// Types
import { HomePageSlideProps } from './home-page-slide.types';

// Styles
import css from './home-page-slide.module.scss';

const HomePageSlide: React.FC<HomePageSlideProps> = ({
    slug = '',
    backgroundImage: { url: backgroundImageUrl = '' } = {},
    foregroundImage = {},
    foregroundLogo = {},
}) => (
    <div className={css.slideContainer}>
        <BaseLink href={`/projects/${slug}`} className={css.link}>
            <Backdrop
                fill
                backdropClass={css.slide}
                backdrop={backgroundImageUrl}
                query='?w=550&h=550&q=70&fit=thumb'
            >
                <div className={css.inner}>
                    <BasePicture
                        imgClass={css.foregroundImage}
                        image={foregroundImage}
                        query='?w=200&q=70&fit=thumb'
                    />
                    <BasePicture
                        imgClass={css.foregroundLogo}
                        image={foregroundLogo}
                        query='?w=160&q=70&fit=thumb'
                    />
                </div>
            </Backdrop>
        </BaseLink>
    </div>
);

export default HomePageSlide;
