import React from 'react';

// Components
import BasePicture from '../../atoms/BasePicture';
import BaseLink from '../../atoms/BaseLink';
import Backdrop from '../Backdrop';

// Types
import { HomePageSlideProps } from './home-page-slide.types';

// Styles
import css from './home-page-slide.module.scss';

const homeSlideQuery = {
    w1024up: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=550',
        fit: '&fit=thumb',
    },
    w1023: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=550',
        fit: '&fit=thumb',
    },
    w767: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=550',
        fit: '&fit=thumb',
    },
    w575: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=550',
        fit: '&fit=thumb',
    },
};

const HomePageSlide: React.FC<HomePageSlideProps> = ({
    slug = '',
    backgroundMedia = {},
    foregroundImage = {},
    foregroundLogo = {},
}) => (
    <div className={css.slideContainer}>
        <BaseLink href={`/projects/${slug}`} className={css.link}>
            <Backdrop
                fill
                backdropClass={css.slide}
                backdrop={backgroundMedia}
                query={homeSlideQuery}
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
