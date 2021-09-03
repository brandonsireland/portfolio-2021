import React, { useContext } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import cc from 'classcat';

// Components
import Icon from '../../atoms/Icon';
import Backdrop from '../../molecules/Backdrop';

// Types
import { PreviousAndNextArticleProps } from './previous-and-next-article.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Context
import { LocalizedStringsContext } from '../../../context/LocalizedStringContext';

// Styles
import css from './previous-and-next-article.module.scss';

const prevAndNextQuery = {
    w1024up: {
        maxWidthQuery: '&w=707',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
    w1023: {
        maxWidthQuery: '&w=707',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
    w767: {
        maxWidthQuery: '&w=707',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
};

const currentQuery = {
    w1024up: {
        maxWidthQuery: '&w=390',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
    w1023: {
        maxWidthQuery: '&w=390',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
    w767: {
        maxWidthQuery: '&w=390',
        maxHeightQuery: '&h=300',
        fit: '&fit=fill',
    },
};

const PreviousAndNextArticle: React.FC<PreviousAndNextArticleProps> = ({
    id = '',
    currentArticleData = {},
    nextArticleData: {
        nextArticleBackgroundImage,
        nextArticleSlug = '',
        nextArticleTitle = '',
    } = {},
    previousArticleData: {
        previousArticleBackgroundImage,
        previousArticleSlug = '',
        previousArticleTitle = '',
    } = {},
}) => {
    const { localizedStrings = [] } = useContext(LocalizedStringsContext);

    return (
        <section id={id} className={css.container}>
            <LazyMotion features={domAnimation}>
                {previousArticleSlug !== '' && (
                    <m.div
                        whileHover={{ scale: 1.1 }}
                        className={css.articleContainer}
                    >
                        <Backdrop
                            fill
                            backdrop={previousArticleBackgroundImage}
                            backdropClass={css.background}
                            alt='Previous Article Background Image'
                            type={
                                previousArticleBackgroundImage.poster
                                    ? 'video'
                                    : 'image'
                            }
                            query={prevAndNextQuery}
                        >
                            <Link href={previousArticleSlug}>
                                <a className={css.link}>
                                    <div className={css.label}>
                                        <Icon
                                            className={cc([
                                                css.carot,
                                                css.reverse,
                                            ])}
                                            icon={IconType['DoubleCarot']}
                                            alt='Previous Item Button'
                                        />
                                        <span className={css.text}>
                                            {previousArticleTitle}
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        </Backdrop>
                    </m.div>
                )}
                <m.div
                    whileHover={{ scale: 1.1 }}
                    className={css.returnContainer}
                >
                    <Backdrop
                        fill
                        backdrop={currentArticleData}
                        backdropClass={css.background}
                        type={currentArticleData.poster ? 'video' : 'image'}
                        alt='Current Article Background Image'
                        query={currentQuery}
                    >
                        <Link href='/projects'>
                            <a className={cc([css.returnLink, css.link])}>
                                <Icon
                                    className={css.menu}
                                    icon={IconType['MenuButton']}
                                    alt='Menu Item Button'
                                />
                                <span className={css.text}>
                                    {localizedStrings['return-to-archive']}
                                </span>
                            </a>
                        </Link>
                    </Backdrop>
                </m.div>
                {nextArticleSlug !== '' && (
                    <m.div
                        whileHover={{ scale: 1.1 }}
                        className={css.articleContainer}
                    >
                        <Backdrop
                            fill
                            backdrop={nextArticleBackgroundImage}
                            backdropClass={css.background}
                            type={
                                nextArticleBackgroundImage.poster
                                    ? 'video'
                                    : 'image'
                            }
                            alt='Next Article Background Image'
                            query={prevAndNextQuery}
                        >
                            <Link href={nextArticleSlug}>
                                <a className={css.link}>
                                    <div className={css.label}>
                                        <span className={css.text}>
                                            {nextArticleTitle}
                                        </span>
                                        <m.div
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <Icon
                                                className={css.carot}
                                                icon={IconType['DoubleCarot']}
                                                alt='Previous Item Button'
                                            />
                                        </m.div>
                                    </div>
                                </a>
                            </Link>
                        </Backdrop>
                    </m.div>
                )}
            </LazyMotion>
        </section>
    );
};

export default PreviousAndNextArticle;
