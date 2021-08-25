import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

// Types
import { HeaderProps } from './header.types';

// Styles
import css from './header.module.scss';

const Header: React.FC<HeaderProps> = ({
    id = '',
    title = '',
    backgroundImage: { url: backgroundImageUrl = '' } = {},
    thumbnailImage = {},
}) => {
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [0, 400], [0, 200]);

    const titleVariants = {
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
        <header id={id}>
            <div className={css.container}>
                <div className={css.inner}>
                    <motion.div
                        style={{
                            y: y,
                            backgroundImage:
                                backgroundImageUrl &&
                                `url(${backgroundImageUrl})`,
                        }}
                        className={css.background}
                    />
                    <motion.div
                        variants={titleVariants}
                        initial='initial'
                        animate='animate'
                        className={css.content}
                    >
                        <h1 className={css.title}>{title}</h1>
                    </motion.div>
                </div>
                <motion.div
                    animate={{
                        scale: [1.5, 1.5, 1],
                        x: [`-50%`, `-50%`, `-50%`],
                        y: [`50%`, `50%`, `50%`],
                        rotate: [0, 360, 360],
                        opacity: [0, 1, 1],
                        transition: { delay: 1 },
                    }}
                    className={css.imageContainer}
                >
                    <img src={thumbnailImage.url} />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
