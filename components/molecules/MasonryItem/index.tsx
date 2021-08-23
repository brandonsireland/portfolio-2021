import React from 'react';
import { motion } from 'framer-motion';

// Components
import BasePicture from '../../atoms/BasePicture';

// Types
import { MasonryItemProps } from './masonry-item.types';

// Styles
import css from './masonry-item.module.scss';

const MasonryItem: React.FC<MasonryItemProps> = ({
    onClick,
    photo: { id = '', url = '' },
}) => {
    const variants = {
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        initial: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };

    return (
        <motion.div
            layoutId={id}
            onClick={onClick}
            variants={variants}
            whileHover={{ scale: 1.05, zIndex: 2 }}
            whileTap={{ scale: 0.95 }}
            className={css.item}
        >
            <BasePicture src={url} />
        </motion.div>
    );
};

export default MasonryItem;
