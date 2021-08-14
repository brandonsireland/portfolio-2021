import React from 'react';
import cc from 'classcat';

// Components
import Logo from '../../atoms/Logo';

// Types
import { NavigationProps } from './navigation.types';

// Styles
import css from './navigation.module.scss';

const Navigation: React.FC<NavigationProps> = ({ isFixed }) => {
    const classes = cc([
        css.container,
        { [css.fixed]: isFixed, }
    ]);

    return (
        <nav className={classes}>
            <Logo />
        </nav>
    );
};

export default Navigation;
