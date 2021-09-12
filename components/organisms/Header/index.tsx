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
}) => {
    const { scrollY } = useViewportScroll();
    const y = useSpring(useTransform(scrollY, [0, 400], [0, -50]), {
        damping: 10,
        stiffness: 5,
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
                </LazyMotion>
            </div>
        </header>
    );
};

export default Header;
