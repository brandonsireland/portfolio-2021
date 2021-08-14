import React, { Fragment } from 'react';
import { motion } from "framer-motion";

// Styles
import css from './with-transition.module.scss';

const WithTransition: React.FC = ({children}) => {
    return (
        <Fragment>
            {children}
            <motion.div
                className={css.slideIn}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
            <motion.div
                className={css.slideOut}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </Fragment>
     );
}
 
export default WithTransition;