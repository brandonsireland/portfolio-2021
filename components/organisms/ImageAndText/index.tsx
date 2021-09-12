import React from 'react';
import cc from 'classcat';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BasePicture from '../../atoms/BasePicture';
import Category from '../../molecules/Category';

// Types
import { ImageAndTextProps } from './image-and-text.types';

// Style
import css from './image-and-text.module.scss';

const ulVariants = {
    initial: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    animate: {
        transition: { staggerChildren: 0.3, delayChildren: 1.6 },
    },
};

const liVariants = {
    initial: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
};

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

const ImageAndText: React.FC<ImageAndTextProps> = ({
    id = '',
    image = {},
    imageLeft = true,
    backgroundImage = {},
    content = '',
    categories = [],
}) => (
    <section
        id={id}
        className={css.container}
        style={{
            backgroundImage: backgroundImage && `url(${backgroundImage.url})`,
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
                    <div className={css.content}>
                        {categories.length > 0 && (
                            <m.ul
                                variants={ulVariants}
                                initial='initial'
                                animate='animate'
                                className={css.list}
                            >
                                {categories.map(({ id, value, href }) => (
                                    <m.li
                                        key={id}
                                        variants={liVariants}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{
                                            scale: 0.95,
                                            rotate: 360,
                                        }}
                                        className={css.item}
                                    >
                                        <Category href={href} value={value} />
                                    </m.li>
                                ))}
                            </m.ul>
                        )}
                    </div>
                </m.div>
            </LazyMotion>
        </div>
    </section>
);

export default ImageAndText;
