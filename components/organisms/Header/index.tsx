import React from 'react';
import {
    useTransform,
    useSpring,
    useViewportScroll,
    LazyMotion,
    domAnimation,
    m,
} from 'framer-motion';

// Components
import BasePicture from '../../atoms/BasePicture';
import Backdrop from '../../molecules/Backdrop';

// Types
import { HeaderProps } from './header.types';

// Styles
import css from './header.module.scss';

const headerQuery = {
    default: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=550',
        fit: '&fit=fill',
    },
    w1024up: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=600',
        fit: '&fit=fill',
    },
    w1023: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=600',
        fit: '&fit=fill',
    },
    w767: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=600',
        fit: '&fit=fill',
    },
    w575: {
        maxWidthQuery: '',
        maxHeightQuery: '&h=600',
        fit: '&fit=fill',
    },
};

const Header: React.FC<HeaderProps> = ({
    id = '',
    title = '',
    media = {},
    thumbnailImage = {},
}) => {
    const { scrollY } = useViewportScroll();
    const y = useSpring(useTransform(scrollY, [0, 400], [0, -50]), {
        damping: 5,
        stiffness: 100,
    });

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
                <LazyMotion features={domAnimation}>
                    <div className={css.inner}>
                        <m.div style={{ y }} className={css.background}>
                            <Backdrop
                                fill
                                backdrop={media}
                                overflow={false}
                                query={headerQuery}
                            />
                        </m.div>
                        <m.div
                            variants={titleVariants}
                            initial='initial'
                            animate='animate'
                            className={css.content}
                        >
                            <h1 className={css.title}>{title}</h1>
                        </m.div>
                    </div>
                    <m.div
                        animate={{
                            scale: [1.5, 1],
                            x: [`-50%`, `-50%`],
                            y: [`50%`, `50%`],
                            opacity: [0, 1],
                            transition: { delay: 1 },
                        }}
                        className={css.imageContainer}
                    >
                        <BasePicture
                            image={thumbnailImage}
                            query='?w=215&q=70&fit=fill'
                        />
                    </m.div>
                </LazyMotion>
            </div>
        </header>
    );
};

export default Header;
