import { useLayoutEffect, useCallback, useState } from 'react';

type RectResult = {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
};

export default function getRect<T extends React.RefObject<HTMLElement>>(
    element?: T,
): RectResult {
    let rect: RectResult = {
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
    };
    if (element && element.current) {
        rect = element.current.getBoundingClientRect();
    }
    return rect;
}

export function useRect(ref: any): RectResult {
    const [rect, setRect] = useState<RectResult>(
        ref && ref.current ? getRect(ref.current) : getRect(),
    );

    const handleResize = useCallback(() => {
        if (!ref.current) return;
        setRect(getRect(ref.current)); // Update client rect
    }, [ref]);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        handleResize();

        // @ts-ignore
        if (typeof ResizeObserver === 'function') {
            // @ts-ignore
            let resizeObserver = new ResizeObserver(() =>
                handleResize(),
            ) as any;
            resizeObserver.observe(element);
            return () => {
                if (!resizeObserver) return;
                resizeObserver.disconnect();
                resizeObserver = null;
            };
        } else {
            window.addEventListener('resize', handleResize); // Browser support, remove freely
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [ref, handleResize]);

    return rect;
}
