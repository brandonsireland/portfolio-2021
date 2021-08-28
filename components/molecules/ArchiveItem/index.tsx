import React from 'react';
import { motion } from 'framer-motion';

// Components
import Backdrop from '../../atoms/Backdrop';
import BaseLink from '../../atoms/BaseLink';

// Types
import { ArchiveItemProps } from './archive-item.types';

// Styles
import css from './archive-item.module.scss';

const ArchiveItem: React.FC<ArchiveItemProps> = ({
    backgroundImage = {},
    backgroundVideo,
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
            >
                <Backdrop
                    backdrop={backgroundImage.url}
                    video={backgroundVideo}
                    type={backgroundVideo ? 'video' : 'image'}
                    fill
                    query='?w=381&h=400&q=70&fit=fill'
                >
                    <div className={css.content}>
                        <h4 className={css.title}>{title}</h4>
                    </div>
                </Backdrop>
            </motion.div>
        </BaseLink>
    );
};

export default ArchiveItem;
