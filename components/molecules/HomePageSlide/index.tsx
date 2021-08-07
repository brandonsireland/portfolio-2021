import React from 'react';

// Components
import BasePicture from '../../atoms/BasePicture';
import BaseLink from '../../atoms/BaseLink';

// Types
import { HomePageSlideProps } from './HomePageSlide.types';

// Styles
import css from './HomePageSlide.module.scss';

const HomePageSlide: React.FC<HomePageSlideProps> = ({
    id = '',
    slug = '',
    backgroundImage: {
        url: backgroundImageUrl = '',
        alt: backgroundImageAlt = '',
    } = {},
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
            <div className={css.slide} key={id}>
                <BasePicture
                    src={backgroundImageUrl}
                    pictureClass={css.backgroundPictureImage}
                    imgClass={css.backgroundImage}
                    alt={backgroundImageAlt}
                />
                <img
                    className={css.foregroundImage}
                    src={foregroundImageUrl}
                    alt={foregroundLogoAlt}
                />
                <img
                    className={css.foregroundLogo}
                    src={foregroundLogoUrl}
                    alt={foregroundImageAlt}
                />
                <BaseLink href={`/project/${slug}`} className={css.link}>
                    READ MORE
                </BaseLink>
            </div>
        </div>
    );
};

export default HomePageSlide;
