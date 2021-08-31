import React, { useEffect } from 'react';
import { useMotionValue, useSpring, LazyMotion, domAnimation, m } from 'framer-motion';

import css from './cursor.module.scss';

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 200, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
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

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                className={css.cursor}
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            />
        </LazyMotion>
    );
};

export default Cursor;
