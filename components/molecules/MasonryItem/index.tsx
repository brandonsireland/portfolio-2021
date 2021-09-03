import React from 'react';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import ResponsiveMedia from '../ResponsiveMedia';
import BaseVideo from '../../atoms/BaseVideo';

// Types
import { MasonryItemProps } from './masonry-item.types';

// Styles
import css from './masonry-item.module.scss';

const masonryQuery = {
    w1024up: {
        maxWidthQuery: '&w=373',
        fit: '&fit=fill',
    },
    w1023: {
        maxWidthQuery: '&w=373',
        fit: '&fit=fill',
    },
    w767: {
        maxWidthQuery: '&w=373',
        fit: '&fit=fill',
    },
};

const MasonryItem: React.FC<MasonryItemProps> = ({
    onClick,
    asset = {},
}) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    
    return (
        <LazyMotion features={domAnimation}>
            <m.div
                ref={ref}
                onClick={onClick}
                initial={{ y: 100, opacity: 0 }}
                animate={inView && { y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.05, zIndex: 2 }}
                className={css.item}
            >
                {asset.poster ? (
                    <BaseVideo
                        playsInline={true}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        url={asset.default?.url}
                        poster={asset.poster.url}
                    />
                ) : (
                    <ResponsiveMedia srcset={asset} queries={masonryQuery} />
                )}
            </m.div>
        </LazyMotion>
    );
};

export default MasonryItem;
