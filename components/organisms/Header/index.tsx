import React from 'react';
import { motion, useAnimation } from 'framer-motion';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';

// Types
import { HeaderProps } from './header.types';

// Styles
import css from './header.module.scss';

const Header: React.FC<HeaderProps> = ({
    id = '',
    title = '',
    backgroundImage = {},
    thumbnailImage = {},
}) => {
    const animation = useAnimation();

    const sequence = async () => {
        await animation.start({
            scale: 1.5,
            x: `-50%`,
            y: `50%`,
        });

        await animation.start({
            opacity: 1,
        });

        await animation.start({
            rotate: 360,
            x: `-50%`,
            y: `50%`,
            transition: {
                delay: 1,
            },
        });

        animation.start({
            scale: 1,
        });
    };

    const titleVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 1.2, duration: 0.3 },
        },
    };

    return (
        <header id={id}>
            <div className={css.container}>
                <div className={css.inner}>
                    <ParallaxChildren topOffset={0} className={css.parallax}>
                        <div className={css.background}>
                            <img
                                src={backgroundImage.url}
                                className={css.image}
                            />
                        </div>
                    </ParallaxChildren>
                    <motion.div
                        variants={titleVariants}
                        initial='initial'
                        animate='animate'
                        transition={{ duration: 1.7 }}
                        className={css.content}
                    >
                        <h1 className={css.title}>{title}</h1>
                    </motion.div>
                </div>
                <motion.div
                    initial={sequence}
                    animate={animation}
                    whileHover={{ scale: 0.85 }}
                    className={css.imageContainer}
                >
                    <img src={thumbnailImage.url} />
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
