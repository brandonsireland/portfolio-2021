import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Backdrop from '../Backdrop';
import BaseLink from '../../atoms/BaseLink';

// Types
import { ArchiveItemProps } from './archive-item.types';

// Styles
import css from './archive-item.module.scss';

const archiveQuery = {
    w1024up: {
        maxWidthQuery: '&w=381',
        maxHeightQuery: '&h=400',
        fit: '&fit=fill',
      },
      w1023: {
          maxWidthQuery: '&w=381',
          maxHeightQuery: '&h=400',
          fit: '&fit=fill',
      },
      w767: {
          maxWidthQuery: '&w=381',
          maxHeightQuery: '&h=400',
          fit: '&fit=fill',
      }
}

const ArchiveItem: React.FC<ArchiveItemProps> = ({
    archiveMedia = {},
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
            <LazyMotion features={domAnimation}>
                <m.div
                    variants={childVariants}
                    className={css.inner}
                    whileHover={{ scale: 1.1 }}
                >
                    <Backdrop
                        backdrop={archiveMedia}
                        type={archiveMedia.poster ? 'video' : 'image'}
                        fill
                        query={archiveQuery}
                    >
                        <div className={css.content}>
                            <h4 className={css.title}>{title}</h4>
                        </div>
                    </Backdrop>
                </m.div>
            </LazyMotion>
        </BaseLink>
    );
};

export default ArchiveItem;
