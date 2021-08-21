import React from 'react';

// Styles
import css from './error.module.scss';

const Error: React.FC = () => (
    <section className={css.container}>
        <div className={css.inner}>
            <h1>404, page doesn&apos;t exist go back.</h1>
        </div>
    </section>
);

export default Error;
