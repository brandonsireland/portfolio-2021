import React from 'react';
import cc from 'classcat';

// Types
import { BasePictureTypes } from './base-picture.types';

// Styles
import css from './base-picture.module.scss';

const BasePicture: React.FC<BasePictureTypes> = ({
    image: {
        url = '',
        alt = '',
    } = {},
    query = '',
    imgClass,
    pictureClass,
}) => {

    const classes = cc([css.image, imgClass]);

    const pictureClasses = cc([css.picture, pictureClass]);

    return (
        <picture className={pictureClasses}>
            <source
                src={`${url}${query}${query !== '' ? '&' : '?'}fm=webp`}
                type='image/webp'
            ></source>
            <img className={classes} src={`${url}${query}`} alt={alt}/>
        </picture>
    );
};

export default BasePicture;