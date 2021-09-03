import React, { useEffect } from 'react';
import {
    useMotionValue,
    useSpring,
    LazyMotion,
    domAnimation,
    m,
} from 'framer-motion';

// Hook
import useWindowSize from '../../../hooks/useWindowSize';

// Styles
import css from './cursor.module.scss';

const Cursor = () => {
    const { width = 0 } = useWindowSize();
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 200, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        if (width >= 768) return;
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);

            // Sets background 'Spotlight'
            document.documentElement.style.setProperty(
                '--cursorX',
                cursorXSpring.get() + 'px',
            );

            document.documentElement.style.setProperty(
                '--cursorY',
                cursorYSpring.get() + 'px',
            );
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return width >= 768 ? (
        <LazyMotion features={domAnimation}>
            <m.div
                className={css.cursor}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
        </LazyMotion>
    ) : null;
};

export default Cursor;
