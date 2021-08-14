import React, { useEffect, useState } from 'react';
import cc from 'classcat';

// Types
import { BasePictureProps } from './base-picture.types';

// Styles
import css from './base-picture.module.scss';

// TODO: refactor? https://nextjs.org/docs/api-reference/next/image
const BasePicture: React.FC<BasePictureProps> = ({
    imgClass,
    pictureClass,
    src = '',
    alt = ''
}) => {
    const [isChained, setIsChained] = useState(false);

    const classes = cc([
        css.image,
        imgClass
    ])

    const pictureClasses = cc([
        css.picture,
        pictureClass
    ])

    useEffect(() => {
        const r = new RegExp('[?]', 'g');
        setIsChained(r.test(src))
    }, []);

    return (
        <picture className={pictureClasses}>
            <source src={`${src}${isChained ? '&' : 'fm=webp'}`} type="image/webp"></source>
            <img className={classes} src={src} alt={alt}/>
        </picture>
    );
}
 
export default BasePicture;