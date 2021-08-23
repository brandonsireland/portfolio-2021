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
    return (
        <div
            className={css.item}
        >
            <motion.div className={css.inner} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }} style={{
                backgroundImage:
                    backgroundImage && `url(${backgroundImage.url})`,
            }}>

            <BaseLink href={`/projects/${slug}`} className={css.link}>
                {title}
            </BaseLink>
            </motion.div>
        </div>
    );
};

export default ArchiveItem;
