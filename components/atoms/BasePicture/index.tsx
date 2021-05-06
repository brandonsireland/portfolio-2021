import React from 'react';
import cc from 'classcat';

// Types
import { BasePictureProps } from './BasePicture.types';

// Styles
import css from './base-picture.module.scss';
 
const BaseImage: React.FC<BasePictureProps> = ({
    imgClass = '',
    src = ''
}) => {
    const classes = cc([
        css.image,
        imgClass
    ])

    const chained = () => {
        const r = new RegExp('[?]', 'g');
        return r.test(src);
    }
    return (
        <picture>
            <source src={`${src}${chained} ? '&' : '?'fm=webp`} type="image/webp"></source>
            <img className={classes} src={src} />
        </picture>
    );
}
 
export default BaseImage;