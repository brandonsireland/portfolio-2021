import React from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"

// Types
import { BaseHeaderProps } from './base-header.types';

// Styles
import css from './base-header.module.scss';
import BasePicture from '../../atoms/BasePicture';

const BaseHeader: React.FC<BaseHeaderProps> = ({
    id = '',
    title = '',
    backgroundImage = {},
    thumbnailImage = {},
}) => (
    <header id={id}>
        <div
            className={css.container}
            style={{
                backgroundImage:
                    backgroundImage && `url(${backgroundImage.url})`,
            }}
        >
            <div className={css.inner}>
                <h1 className={css.title}>{title}</h1>
            </div>
            <LazyMotion features={domAnimation}>
                <m.div
                    className={css.imageContainer}
                    animate={{ scale: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 30,
                        duration: 6,
                    }}
                >
                    <BasePicture image={thumbnailImage} />
                </m.div>
            </LazyMotion>
        </div>
    </header>
);

export default BaseHeader;
