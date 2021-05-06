import React from 'react';

// Components
import Logo from '../../atoms/Logo';

// Styles
import css from './navigation.module.scss'
 
const Navigation: React.FC = () => {
    return ( 
        <nav className={css.container}>
            <Logo />
        </nav>
     );
}
 
export default Navigation;