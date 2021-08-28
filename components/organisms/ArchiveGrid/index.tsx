import React from 'react';
import { LazyMotion, domAnimation, m } from "framer-motion"

// Components
import ArchiveItem from '../../molecules/ArchiveItem';

// Types
import { ArchiveGridProps } from './archive-grid.types';

// Styles
import css from './archive-grid.module.scss';

const ArchiveGrid: React.FC<ArchiveGridProps> = ({ pages = [] }) => {
    const divVariants = {
        initial: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
        animate: {
            transition: { staggerChildren: 0.1 },
        },
    };

    return (
        <section className={css.container}>
            {pages.length > 0 && (
                <LazyMotion features={domAnimation}>
                    <m.div
                        variants={divVariants}
                        initial='initial'
                        animate='animate'
                        className={css.inner}>
                        {pages.map(({ id, slug, title, backgroundImage, backgroundVideo }) => (
                            <ArchiveItem key={id} slug={slug} title={title} backgroundImage={backgroundImage} backgroundVideo={backgroundVideo} />
                        ))}
                    </m.div>
                </LazyMotion>
            )}
        </section>
    );
};

export default ArchiveGrid;