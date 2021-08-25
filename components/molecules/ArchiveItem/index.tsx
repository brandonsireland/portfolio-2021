import React from 'react';
import { motion } from 'framer-motion';

// Components
import BaseLink from '../../atoms/BaseLink';

// Types
import { ArchiveItemProps } from './archive-item.types';

// Styles
import css from './archive-item.module.scss';

const ArchiveItem: React.FC<ArchiveItemProps> = ({
    backgroundImage = {},
    slug = '',
    title = '',
}) => {

    const childVariants = {
        initial: {
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
        animate: {
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
    };


    return (
        <BaseLink href={`/projects/${slug}`} className={css.item}>
            <motion.div
                variants={childVariants}
                className={css.inner}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}
                style={{
                    backgroundImage:
                        backgroundImage && `url(${backgroundImage.url})`,
                }}
            >
                <div className={css.content}>
                <h4>{title}</h4>
                </div>
            </motion.div>
        </BaseLink>
    );
};

export default ArchiveItem;