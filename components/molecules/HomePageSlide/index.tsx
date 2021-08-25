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
}) => (
    <div
        className={css.slideContainer}
    >
        <BaseLink href={`/projects/${slug}`} className={css.link}>
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
                </div>
            </div>
        </BaseLink>
    </div>
);

export default HomePageSlide;
