import { useEffect, useState } from 'react';
import { useTransform, useSpring, useViewportScroll } from 'framer-motion';

const useScroll = (bottomRange = 0, topRange = 1) => {
    const [isComplete, setIsComplete]: [boolean, Function] = useState(false);
    const [isNearTop, setIsNearTop]: [boolean, Function] = useState(true);

    const { scrollYProgress } = useViewportScroll();

    const yRange = useTransform(
        scrollYProgress,
        [0, 1],
        [bottomRange, topRange],
    );
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(
        () =>
            yRange.onChange(v => {
                setIsNearTop(v < topRange / 100);
                setIsComplete(v >= topRange);
            }),
        [yRange],
    );

    return {
        pathLength,
        isComplete,
        isNearTop,
    };
};

export default useScroll;
