import React from 'react';
import cc from 'classcat';

// Components
import Logo from '../../atoms/Logo';
import BaseLink from '../../atoms/BaseLink';

// Types
import { NavigationType } from './navigation.types';

// Styles
import css from './navigation.module.scss';

const Navigation: React.FC<NavigationType> = ({
    navigationItems = [],
    isFixed = false,
}) => {

    const classes = cc([css.container, { [css.fixed]: isFixed }]);

    return (
        <nav className={classes}>
            <Logo />
            {navigationItems.length > 0 && (
                <ul className={css.list}>
                    {navigationItems.map(
                        ({ id = '', href = '', label = '' }) => (
                            <li key={id} className={css.item}>
                                <BaseLink href={`/${href}`}>{label}</BaseLink>
                            </li>
                        ),
                    )}
                </ul>
            )}
        </nav>
    );
};

export default Navigation;
