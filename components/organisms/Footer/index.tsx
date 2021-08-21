import React from 'react';
import { motion } from 'framer-motion';

// Components
import Category from '../../molecules/Category';

// Types
import { FooterProps } from './footer.types';

// Style
import css from './footer.module.scss';

const Footer: React.FC<FooterProps> = ({ id = '', footerItems = [] }) => {
    const ulVariants = {
        initial: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
        },
        animate: {
            transition: { staggerChildren: 0.3, delayChildren: 1.6 },
        },
    };

    const liVariants = {
        initial: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 },
            },
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
    };

    return (
        <footer id={id} className={css.container}>
            {footerItems.length > 0 && (
                <motion.ul
                    variants={ulVariants}
                    initial='initial'
                    animate='animate'
                    className={css.list}
                >
                    {footerItems.map(({ id, value, href }) => (
                        <motion.li
                            key={id}
                            variants={liVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{
                                scale: 0.95,
                                rotate: 360,
                            }}
                            className={css.item}
                        >
                            <Category href={href} value={value} />
                        </motion.li>
                    ))}
                </motion.ul>
            )}
        </footer>
    );
};

export default Footer;
