import React, { useContext, useEffect, useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import cc from 'classcat';

// Components
import Icon from '../../atoms/Icon';
import Backdrop from '../../molecules/Backdrop';

// Types
import {
    PreviousAndNextArticleProps,
    articleDataProps,
} from './previous-and-next-article.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Context
import { LocalizedStringsContext } from '../../../context/LocalizedStringContext';

// Utils
import { client, getContentData } from '../../../contentful';

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
    currentArticlePublishDate = '',
}) => {
    const { localizedStrings = [] } = useContext(LocalizedStringsContext);
    const [articleData, setArticleData] = useState<articleDataProps>({
        nextArticleSlug: '',
        nextArticleTitle: '',
        nextArticleBackgroundImage: {},
        previousArticleSlug: '',
        previousArticleTitle: '',
        previousArticleBackgroundImage: {},
    });

    useEffect(() => {
        const fetchArticleData = async () => {
            const nextArticleData = await client
                .getEntries({
                    content_type: 'portfolioItem',
                    limit: 1,
                    include: 10,
                    'fields.publishDate[gt]': currentArticlePublishDate,
                })
                .then(({ items: [data = {}] = [] }) => {
                    const {
                        slug: nextArticleSlug = '',
                        title: nextArticleTitle = '',
                        archiveMedia: nextArticleBackgroundImage = {},
                    } = getContentData(data);

                    return {
                        nextArticleSlug,
                        nextArticleTitle,
                        nextArticleBackgroundImage,
                    };
                })
                .then(
                    async ({
                        nextArticleSlug,
                        nextArticleTitle,
                        nextArticleBackgroundImage,
                    }) => {

                        return await client
                            .getEntries({
                                content_type: 'portfolioItem',
                                limit: 1,
                                include: 10,
                                'fields.publishDate[lt]':
                                    currentArticlePublishDate,
                            })
                            .then(({ items: [data = {}] = [] }) => {
                                const {
                                    slug: previousArticleSlug = '',
                                    title: previousArticleTitle = '',
                                    archiveMedia:
                                        previousArticleBackgroundImage = {},
                                } = getContentData(data);
                                
                                setArticleData({
                                    ...articleData,
                                    previousArticleSlug,
                                    previousArticleTitle,
                                    previousArticleBackgroundImage,
                                    nextArticleSlug,
                                    nextArticleTitle,
                                    nextArticleBackgroundImage,
                                });
                            });
                    },
                )
                .catch(err => console.error(err));

            return nextArticleData;
        };

        fetchArticleData();
    }, [currentArticleData]);

    return (
        <section id={id} className={css.container}>
            <LazyMotion features={domAnimation}>
                {articleData.previousArticleSlug && articleData.previousArticleBackgroundImage && (
                    <m.div
                        whileHover={{ scale: 1.1 }}
                        className={css.articleContainer}
                    >
                        <Backdrop
                            fill
                            backdrop={
                                articleData.previousArticleBackgroundImage
                            }
                            backdropClass={css.background}
                            alt='Previous Article Background Image'
                            type={
                                articleData.previousArticleBackgroundImage
                                    ?.poster
                                    ? 'video'
                                    : 'image'
                            }
                            query={prevAndNextQuery}
                        >
                            <Link href={articleData.previousArticleSlug} scroll>
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
                                            {articleData.previousArticleTitle}
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
                        <Link href='/projects' scroll>
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
                {articleData.nextArticleSlug && articleData.nextArticleBackgroundImage && (
                    <m.div
                        whileHover={{ scale: 1.1 }}
                        className={css.articleContainer}
                    >
                        <Backdrop
                            fill
                            backdrop={articleData.nextArticleBackgroundImage}
                            backdropClass={css.background}
                            type={
                                articleData.nextArticleBackgroundImage?.poster
                                    ? 'video'
                                    : 'image'
                            }
                            alt='Next Article Background Image'
                            query={prevAndNextQuery}
                        >
                            <Link href={articleData.nextArticleSlug} scroll>
                                <a className={css.link}>
                                    <div className={css.label}>
                                        <span className={css.text}>
                                            {articleData.nextArticleTitle}
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