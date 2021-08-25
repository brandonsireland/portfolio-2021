import React, { useContext, useState, useCallback, useRef } from 'react';
import {
    motion,
    useTransform,
    useViewportScroll,
    useSpring,
} from 'framer-motion';

// Components
import MasonryItem from '../../molecules/MasonryItem';
import GridModal from '../../molecules/MasonryModal';

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
    masonryPhotos = [],
}) => {
    const { setModal } = useContext(ModalContext);
    const { scrollY } = useViewportScroll();
    const ref = useRef<HTMLDivElement>(null);
    const {height, top} = useRect(ref);
    
    const { width = 0 } = useWindowSize();

    const y = useSpring(
        useTransform(
            scrollY,
            [top, height],
            [500,( (height - 500) / 2)],
        ),
        {
            damping: 100,
            stiffness: 100,
        },
    );

    const variants = {
        animate: {
            transition: { staggerChildren: 0.1, delayChildren: 0.6 },
        },
        initial: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
    };

    return (
        <section id={id}>
            <div className={css.container} ref={ref}>
                {width > 768 ? (
                    <motion.div
                    style={{
                        y,
                        rotate: titleLeft ? -90 : 90,
                        translateX: titleLeft ? '-52%' :'38%'
                    }}
                    className={css.textContainer}
                >
                    <h2 className={css.text}>{title}</h2>
                </motion.div>
                ) : (
                    <div className={css.textContainer}>
                    <h2 className={css.text}>{title}</h2>
                    </div>
                )}
                {masonryPhotos.length > 0 && (
                    <motion.div
                        variants={variants}
                        initial='initial'
                        animate='animate'
                        className={css.inner}
                    >
                        {masonryPhotos.map(photo => (
                            <MasonryItem
                                key={photo.id}
                                photo={photo}
                                onClick={() =>
                                    setModal({
                                        component: GridModal,
                                        displayModal: true,
                                        props: { image: photo },
                                    })
                                }
                            />
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default MasonryGrid;
