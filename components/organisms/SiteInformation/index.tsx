import React, { useContext } from 'react';
import cc from 'classcat';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BaseLink from '../../atoms/BaseLink';
import Category from '../../molecules/Category';
import ResponsiveMedia from '../../molecules/ResponsiveMedia';
import BaseVideo from '../../atoms/BaseVideo';

// Types
import { SiteInformationProps } from './site-information.types';

// Context
import { LocalizedStringsContext } from '../../../context/LocalizedStringContext';

// Styles
import css from './site-information.module.scss';

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

const siteInfoQuery = {
    w1024up: {
        maxWidthQuery: '&w=720',
        maxHeightQuery: '&h=570',
        fit: '&fit=thumb',
    },
    w1023: {
        maxWidthQuery: '&w=720',
        maxHeightQuery: '&h=570',
        fit: '&fit=thumb',
    },
    w767: {
        maxWidthQuery: '&w=720',
        maxHeightQuery: '&h=570',
        fit: '&fit=thumb',
    },
};

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
    media = {},
    imageLeft = true,
}) => {
    const { localizedStrings = [] } = useContext(LocalizedStringsContext);
    const { ref, inView } = useInView({
        threshold: 0.4,
    });
    const newYear = new Date(yearCreated).getFullYear();

    return (
        <section id={id} className={css.container} ref={ref}>
            <div className={cc([css.inner, { [css.reverse]: !imageLeft }])}>
                <LazyMotion features={domAnimation}>
                    <ParallaxChildren className={css.imageContainer}>
                        <m.div
                            variants={imageVariants}
                            initial='initial'
                            animate={inView && 'animate'}
                        >
                            {media?.poster ? (
                                <BaseVideo
                                    url={media.default && media?.default.url}
                                    poster={media?.poster.url}
                                    playsInline={true}
                                    autoPlay={true}
                                    muted={true}
                                    loop={true}
                                    controls={false}
                                />
                            ) : (
                                <Aspect
                                    ratio={'720x570'}
                                    visibleOverflow={false}
                                >
                                    <ResponsiveMedia
                                        srcset={media}
                                        queries={siteInfoQuery}
                                    />
                                </Aspect>
                            )}
                        </m.div>
                    </ParallaxChildren>
                    <m.div
                        variants={contentVariants}
                        initial='initial'
                        animate={inView && 'animate'}
                        className={cc([
                            css.contentContainer,
                            { [css.contentReverse]: !imageLeft },
                        ])}
                    >
                        <Markdown content={description} />
                        {siteUrlHref && (
                            <div className={css.content}>
                                <p className={cc([css.space, css.text])}>
                                    {localizedStrings['site']}:{' '}
                                </p>
                                <BaseLink
                                    href={siteUrlHref}
                                    target={siteUrlTarget}
                                    className={css.link}
                                >
                                    {siteUrlLabel}
                                </BaseLink>
                            </div>
                        )}
                        <div className={css.content}>
                            <p className={cc([css.space, css.text])}>
                                {localizedStrings['year-created']}:
                            </p>
                            <p className={css.text}>{newYear}</p>
                        </div>
                        <div className={css.content}>
                            <p className={cc([css.space, css.text])}>
                                {localizedStrings['role']}:
                            </p>
                            <p className={css.text}>{role}</p>
                        </div>
                        {agencyAssociatedWithHref && (
                            <div className={css.content}>
                                <p className={cc([css.space, css.text])}>
                                    {localizedStrings['agency-associated-with']}
                                    :{' '}
                                </p>
                                <BaseLink href={agencyAssociatedWithHref} className={css.link}>
                                    {agencyAssociatedWithValue}
                                </BaseLink>
                            </div>
                        )}
                        <div className={css.content}>
                            {categories.length > 0 && (
                                <m.ul
                                    variants={ulVariants}
                                    initial='initial'
                                    animate={inView && 'animate'}
                                    className={css.list}
                                >
                                    {categories.map(({ id, value, href }) => (
                                        <m.li
                                            key={id}
                                            variants={liVariants}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{
                                                scale: 0.95,
                                                rotate: 360,
                                            }}
                                            className={css.item}
                                        >
                                            <Category
                                                href={href}
                                                value={value}
                                            />
                                        </m.li>
                                    ))}
                                </m.ul>
                            )}
                        </div>
                    </m.div>
                </LazyMotion>
            </div>
        </section>
    );
};

export default SiteInformation;
