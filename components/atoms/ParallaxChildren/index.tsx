import React, { useRef, useState, useEffect } from 'react';
import {
    useViewportScroll,
    useTransform,
    useSpring,
    motion,
} from 'framer-motion';

// Types
import { ParallaxChildrenProps } from './parallax-children.types';

const calculateMinHeight = (height: number, range: number) => {
    return height + height * range;
};

const rand = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (+max - +min)) + +min;
};
// TODO: maybe refactor to this https://codesandbox.io/s/framer-motion-parallax-box-ekqoe?from-embed=&file=/ui/atoms/parallax-box/index.jsx:263-281
const ParallaxChildren: React.FC<ParallaxChildrenProps> = ({
    className,
    children,
    topOffset = -500,
    bottomOffset = 500,
    range = 0.2,
}) => {
    const { scrollY } = useViewportScroll();
    const ref = useRef<HTMLDivElement>(null);
    const [minHeight, setMinHeight] = useState('auto');
    const [elementTop, setElementTop] = useState(0);

    const springConfig = {
        damping: 100,
        stiffness: 100,
        mass: rand(1, 3),
    };

    useEffect(() => {
        if (ref.current === null) return;

        const onResize = () => {
            setElementTop(ref.current.offsetTop);
            setMinHeight(calculateMinHeight(ref.current.offsetHeight, range));
        };

        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [ref, range]);

    const y = useSpring(
        useTransform(
            scrollY,
            [elementTop + topOffset, elementTop + bottomOffset],
            ['0%', `${range * 100}%`],
        ),
        springConfig,
    );

    return (
        <div style={{ minHeight }} className={className}>
            <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
                {children}
            </motion.div>
        </div>
    );
};

export default ParallaxChildren;
