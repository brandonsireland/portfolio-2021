import React from 'react';
import BaseLink from '../BaseLink';

// Styles
import css from './error.module.scss';

const Error: React.FC = () => (
    <section className={css.container}>
        <div className={css.inner}>
            <span className={css.fourofour}>404</span>
            <h1>page does not exist, go back.</h1>
            <div>
                <BaseLink href='/' className={css.link}>
                    Go Home
                </BaseLink>
                <BaseLink href='/projects' className={css.link}>
                    Go To Archive
                </BaseLink>
            </div>
        </div>
    </section>
);

export default Error;
