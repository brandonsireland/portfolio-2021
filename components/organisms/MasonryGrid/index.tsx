import React, { useContext, useRef } from 'react';
import {
    useTransform,
    useViewportScroll,
    useSpring,
    LazyMotion,
    domAnimation,
    m,
} from 'framer-motion';

// Components
import MasonryItem from '../../molecules/MasonryItem';

// Types
import { MasonryGridProps } from './masonry-grid.types';

// Context
import { ModalContext } from '../../../context/ModalContext';

// Utils
import useWindowSize from '../../../hooks/useWindowSize';
import useRect from '../../../hooks/useRect';

// Styles
import css from './masonry-grid.module.scss';

const MasonryGrid: React.FC<MasonryGridProps> = ({
    id = '',
    title = '',
    titleLeft = true,
    masonryMedia = [],
}) => {
    const { setModal } = useContext(ModalContext);
    const { scrollY } = useViewportScroll();
    const ref = useRef<HTMLDivElement>(null);
    const { height, top } = useRect(ref);

    const { width = 0 } = useWindowSize();

    const y = useSpring(
        useTransform(scrollY, [top, height], [500, (height - 500) / 2]),
        {
            damping: 100,
            stiffness: 100,
        },
    );

    return (
        <section id={id}>
            <div className={css.container} ref={ref}>
                <LazyMotion features={domAnimation}>
                    {width > 1024 ? (
                        <m.div
                            style={{
                                y,
                                rotate: titleLeft ? -90 : 90,
                                translateX: titleLeft ? '-52%' : '37%',
                            }}
                            className={css.textContainer}
                        >
                            <h2 className={css.text}>{title}</h2>
                        </m.div>
                    ) : (
                        <div className={css.textContainer}>
                            <h2 className={css.text}>{title}</h2>
                        </div>
                    )}
                </LazyMotion>
                {masonryMedia.length > 0 && (
                    <div className={css.inner}>
                        {masonryMedia.map(asset => (
                            <MasonryItem
                                key={asset.id}
                                asset={asset}
                                onClick={() =>
                                    setModal({
                                        component: 'MasonryModal',
                                        displayModal: true,
                                        props: { asset: asset },
                                    })
                                }
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MasonryGrid;
