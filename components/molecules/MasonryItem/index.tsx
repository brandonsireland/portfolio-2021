import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import BasePicture from '../../atoms/BasePicture';

// Types
import { MasonryItemProps } from './masonry-item.types';

// Styles
import css from './masonry-item.module.scss';
import BaseVideo from '../../atoms/BaseVideo';

const MasonryItem: React.FC<MasonryItemProps> = ({
    onClick,
    asset: { id = '', contentType = '', },
    asset,
}) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            layoutId={id}
            onClick={onClick}
            initial={{y: 100, opacity: 0}}
            animate={inView && { y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, zIndex: 2 }}
            className={css.item}
        >
            {contentType === 'video/mp4' ? (
                <BaseVideo
                    playsInline={true}
                    pause={!inView}
                    autoPlay={true}
                    muted={true}
                    loop={true}
                    url={asset.url}
                />
            ): (                    
                <BasePicture image={asset} query='?w=373&q=78&fit=fill' />
            )}
        </motion.div>
    );
};

export default MasonryItem;
