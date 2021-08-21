import React, { useContext } from 'react';
import { motion } from 'framer-motion';

// Components
import GridItem from '../../molecules/GridItem';
import GridModal from '../../molecules/GridModal';

// Types
import { MasonryGridProps } from './masonry-grid.types';

// Styles
import css from './masonry-grid.module.scss';

// Context
import { ModalContext } from '../../../context/ModalContext';

const MasonryGrid: React.FC<MasonryGridProps> = ({
    id = '',
    masonryPhotos = [],
}) => {
    const { setModal } = useContext(ModalContext);

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
            <div className={css.container}>
                {masonryPhotos.length > 0 && (
                    <motion.div
                        variants={variants}
                        initial='initial'
                        animate='animate'
                        className={css.inner}
                    >
                        {masonryPhotos.map(photo => (
                            <GridItem
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
