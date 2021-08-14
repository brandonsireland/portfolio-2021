import React from 'react';

// Types
import { CategoriesProps } from './categories.types';

// Styles
import css from './categories.module.scss';

const Categories: React.FC<CategoriesProps> = ({
    id = '',
    categories = [],
}) => {
    return (
        <section id={id} className={css.container}>
            {categories.length > 0 && (
                <ul className={css.list}>
                    {categories.map(({ id, value }) => (
                        <li key={id} className={css.item}>{value}</li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Categories;
