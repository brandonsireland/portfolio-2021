import React from 'react';
import cc from 'classcat';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BasePicture from '../../atoms/BasePicture';

// Types
import { ImageAndTextProps } from './image-and-text.types';

// Style
import css from './image-and-text.module.scss';

const ImageAndText: React.FC<ImageAndTextProps> = ({
    id = '',
    image = {},
    imageLeft = true,
    backgroundImage = {},
    content = '',
}) => {
    const imageVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6 },
        },
    };

    const contentVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
        },
    };

    return (
        <section
            id={id}
            className={css.container}
            style={{
                backgroundImage:
                    backgroundImage && `url(${backgroundImage.url})`,
            }}
        >
            <div className={cc([css.inner, { [css.reverse]: !imageLeft }])}>
                <ParallaxChildren className={css.imageContainer} topOffset={0}>
                    <Aspect ratio='1x1' visibleOverflow={false}>
                        <LazyMotion features={domAnimation}>
                            <m.div
                                variants={imageVariants}
                                initial='initial'
                                animate='animate'
                            >
                                <BasePicture
                                    image={image}
                                    query='?w=576&h=589&q=70&fit=thumb'
                                />
                            </m.div>
                        </LazyMotion>
                    </Aspect>
                </ParallaxChildren>
                <LazyMotion features={domAnimation}>
                    <m.div
                        variants={contentVariants}
                        initial='initial'
                        animate='animate'
                        className={css.contentContainer}
                    >
                        <Markdown content={content} />
                    </m.div>
                </LazyMotion>
            </div>
        </section>
    );
};

export default ImageAndText;
