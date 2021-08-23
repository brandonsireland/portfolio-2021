import React from 'react';

// Components
import ArchiveItem from '../../molecules/ArchiveItem';

export interface ArchiveGridProps {
    pages: any[];
}

// Styles
import css from './archive-grid.module.scss';

const ArchiveGrid: React.FC<ArchiveGridProps> = ({ pages = [] }) => {
    return (
        <section className={css.container}>
            {pages.length > 0 && (
                <div className={css.inner}>
                    {pages.map(({ id, slug, title, backgroundImage }) => (
                        <ArchiveItem key={id} slug={slug} title={title} backgroundImage={backgroundImage} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ArchiveGrid;
