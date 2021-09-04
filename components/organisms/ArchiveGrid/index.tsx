import React from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import ArchiveItem from '../../molecules/ArchiveItem';

// Types
import { ArchiveGridProps } from './archive-grid.types';

// Styles
import css from './archive-grid.module.scss';

const ArchiveGrid: React.FC<ArchiveGridProps> = ({ portfolioItems = [] }) => {
    const divVariants = {
        initial: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
        animate: {
            transition: { staggerChildren: 0.1 },
        },
        exit: {
            opacity: 0
        }
    };

    return (
        <section className={css.container}>
            {portfolioItems.length > 0 && (
                <LazyMotion features={domAnimation}>
                    <m.div
                        variants={divVariants}
                        initial='initial'
                        animate='animate'
                        exit='exit'
                        className={css.inner}
                    >
                        {portfolioItems.map(({ id, slug, title, archiveMedia }) => (
                            <ArchiveItem
                                key={id}
                                slug={slug}
                                title={title}
                                archiveMedia={archiveMedia}
                            />
                        ))}
                    </m.div>
                </LazyMotion>
            )}
        </section>
    );
};

export default ArchiveGrid;
