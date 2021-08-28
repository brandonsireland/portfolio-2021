import React, { useContext } from 'react';
import cc from 'classcat';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BaseLink from '../../atoms/BaseLink';
import Category from '../../molecules/Category';
import BasePicture from '../../atoms/BasePicture';
import BaseVideo from '../../atoms/BaseVideo';

// Types
import { SiteInformationProps } from './site-information.types';

// Context
import { LocalizedStringsContext } from '../../../context/LocalizedStringContext';

// Styles
import css from './site-information.module.scss';

const SiteInformation: React.FC<SiteInformationProps> = ({
    id = '',
    siteUrl: {
        target: siteUrlTarget,
        href: siteUrlHref = '',
        label: siteUrlLabel = '',
    } = {},
    yearCreated,
    role = '',
    agencyAssociatedWith: {
        value: agencyAssociatedWithValue = '',
        href: agencyAssociatedWithHref = '',
    } = {},
    categories,
    description,
    image: {
        url: mediaUrl = '',
        contentType: mediaContentType = ''
    } = {},
    image,
    imageLeft = true,
}) => {
    const { localizedStrings = [] } = useContext(LocalizedStringsContext);

    const { ref, inView } = useInView({
        threshold: 0.4,
    });

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

    const imageVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6 },
        },
    };

    const contentVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6 },
        },
    };

    return (
        <section id={id} className={css.container} ref={ref}>
            <div className={cc([css.inner, { [css.reverse]: !imageLeft }])}>
                <ParallaxChildren className={css.imageContainer}>
                    <motion.div
                        variants={imageVariants}
                        initial='initial'
                        animate={inView && 'animate'}
                    >
                        {mediaContentType === 'image/jpeg' ? (
                            <Aspect ratio={'720x570'} visibleOverflow={false}>
                                <BasePicture image={image} query="?w=720&h=570&q=100&fit=thumb" />
                            </Aspect>
                        ) : (
                            <BaseVideo
                                    url={mediaUrl}
                                    pause={!inView}
                                    playsInline={true}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    controls={false}
                            />
                        )}
                    </motion.div>
                </ParallaxChildren>
                <motion.div
                    variants={contentVariants}
                    initial='initial'
                    animate={inView && 'animate'}
                    className={cc([
                        css.contentContainer,
                        { [css.contentReverse]: !imageLeft },
                    ])}
                >
                    <Markdown content={description} />
                    <div className={css.content}>
                        <p className={css.space}>
                            {localizedStrings['site']}:{' '}
                        </p>
                        <BaseLink href={siteUrlHref} target={siteUrlTarget}>
                            {siteUrlLabel}
                        </BaseLink>
                    </div>
                    <div className={css.content}>
                        <p className={css.space}>
                            {localizedStrings['year-created']}:
                        </p>
                        <p>{newYear}</p>
                    </div>
                    <div className={css.content}>
                        <p className={css.space}>{localizedStrings['role']}:</p>
                        <p>{role}</p>
                    </div>
                    <div className={css.content}>
                        <p className={css.space}>
                            {localizedStrings['agency-associated-with']}:{' '}
                        </p>
                        <BaseLink href={agencyAssociatedWithHref}>
                            {agencyAssociatedWithValue}
                        </BaseLink>
                    </div>
                    <div className={css.content}>
                        {categories.length > 0 && (
                            <motion.ul
                                variants={ulVariants}
                                initial='initial'
                                animate={inView && 'animate'}
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
                                        <Category href={href} value={value} />
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SiteInformation;
