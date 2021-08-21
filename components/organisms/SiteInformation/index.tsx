import React from 'react';
import cc from 'classcat';
import { motion } from 'framer-motion';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BaseLink from '../../atoms/BaseLink';
import Icon from '../../atoms/Icon';

// Types
import { SiteInformationProps } from './site-information.types';

// Styles
import css from './site-information.module.scss';

const SiteInformation: React.FC<SiteInformationProps> = ({
    id = '',
    siteUrl: {
        target: siteUrlTarget,
        href: siteUrlHref = '',
        label: siteUrlLabel = '',
    } = {},
    siteLabel = '',
    yearCreated,
    yearCreatedLabel = '',
    agencyAssociatedWithLabel = '',
    role = '',
    roleLabel = '',
    agencyAssociatedWith: {
        value: agencyAssociatedWithValue = '',
        href: agencyAssociatedWithHref = '',
    } = {},
    categories,
    description,
    image = {},
    imageLeft = true,
}) => {
    const newYear = new Date(yearCreated).getFullYear();

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
        <section id={id} className={css.container}>
            <div className={cc([css.inner, { [css.reverse]: !imageLeft }])}>
                <ParallaxChildren className={css.imageContainer} topOffset={0}>
                    <Aspect ratio='1x1' visibleOverflow={false}>
                        <img src={image.url} />
                    </Aspect>
                </ParallaxChildren>
                <div className={css.contentContainer}>
                    <Markdown content={description} />
                        <div className={css.content}>
                            <p>{siteLabel}</p>
                            <BaseLink href={siteUrlHref} target={siteUrlTarget}>
                                {siteUrlLabel}
                            </BaseLink>
                        </div>
                        <div className={css.content}>
                            <p>{yearCreatedLabel}</p>
                            <p>{newYear}</p>
                        </div>
                        <div className={css.content}>
                            <p>{roleLabel}:</p>
                            <p>{role}</p>
                        </div>
                        <div className={css.content}>
                            <p>{agencyAssociatedWithLabel} </p>
                            <BaseLink href={agencyAssociatedWithHref}>
                                {agencyAssociatedWithValue}
                            </BaseLink>
                        </div>
                        <div className={css.content}>
                            {categories.length > 0 && (
                                <motion.ul
                                    variants={ulVariants}
                                    initial='initial'
                                    animate='animate'
                                    className={css.list}
                                >
                                    {categories.map(({ id, value, href }) => (
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
                                            <BaseLink href={href}>
                                                <Icon
                                                    icon={value}
                                                    alt={value}
                                                    className={css.icon}
                                                />
                                            </BaseLink>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            )}
                        </div>
                </div>
            </div>
        </section>
    );
};

export default SiteInformation;
