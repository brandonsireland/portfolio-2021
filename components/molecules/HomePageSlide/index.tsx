import React from 'react';

// Components
import BasePicture from '../../atoms/BasePicture';
import BaseLink from '../../atoms/BaseLink';

// Types
import { HomePageSlideProps } from './home-page-slide.types';

// Styles
import css from './home-page-slide.module.scss';

const HomePageSlide: React.FC<HomePageSlideProps> = ({
    slug = '',
    backgroundImage: { url: backgroundImageUrl = '' } = {},
    foregroundImage: {
        url: foregroundImageUrl = '',
        alt: foregroundImageAlt = '',
    } = {},
    foregroundLogo: {
        url: foregroundLogoUrl = '',
        alt: foregroundLogoAlt = '',
    } = {},
}) => {
    return (
        <div className={css.slideContainer}>
            <div
                className={css.slide}
                style={{
                    backgroundImage:
                        backgroundImageUrl && `url(${backgroundImageUrl})`,
                }}
            >
                <div className={css.inner}>
                <div>
                    <BasePicture
                        imgClass={css.foregroundImage}
                        src={foregroundImageUrl}
                        alt={foregroundLogoAlt}
                    />
                </div>
                <img
                    className={css.foregroundLogo}
                    src={foregroundLogoUrl}
                    alt={foregroundImageAlt}
                />
                <BaseLink href={`/projects/${slug}`} className={css.link}>
                    READ MORE
                </BaseLink>
                </div>
            </div>
        </div>
    );
};

export default HomePageSlide;
