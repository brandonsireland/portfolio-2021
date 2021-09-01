import React, { Fragment } from 'react';
import cc from 'classcat';
import { useInView } from 'react-intersection-observer';

// Types
import { BasePictureTypes } from './base-picture.types';

// Hooks
import useNativeLazyLoading from '../../../hooks/useNativeLazyLoading';

// Styles
import css from './base-picture.module.scss';

// https://github.com/thebuilder/react-intersection-observer/blob/master/docs/Recipes.md#lazy-image-load
const BasePicture: React.FC<BasePictureTypes> = ({
    image: { url = '', alt = '' } = {},
    query = '',
    imgClass,
}) => {
    const supportsLazyLoading = useNativeLazyLoading();
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
        skip: supportsLazyLoading !== false,
    });

    const classes = cc([css.image, imgClass]);

    return (
        <picture ref={ref} className={css.picture}>
            {inView || supportsLazyLoading ? (
                <Fragment>
                    <source
                        srcSet={`${url}${query}${query !== '' ? '&' : '?'}fm=webp`}
                        type='image/webp'
                    ></source>
                    <img
                        className={classes}
                        src={`${url}${query}`}
                        alt={alt}
                        loading='lazy'
                    />
                </Fragment>
            ) : null}
        </picture>
    );
};

export default BasePicture;
