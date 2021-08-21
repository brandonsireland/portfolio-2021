import React from 'react';

// Components
import BaseLink from '../../atoms/BaseLink';

export interface GridProps {
    pages: any[];
}

// Styles
import css from './grid.module.scss';

const Grid: React.FC<GridProps> = ({ pages = [] }) => {
    return (
        <section className={css.container}>
            {pages.length > 0 && (
                <div className={css.inner}>
                    {pages.map(({ id, slug, title, backgroundImage }) => (
                        <div
                            key={id}
                            className={css.item}
                            style={{
                                backgroundImage:
                                    backgroundImage &&
                                    `url(${backgroundImage.url})`,
                            }}
                        >
                            <BaseLink href={slug} className={css.link}>{title}</BaseLink>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Grid;
