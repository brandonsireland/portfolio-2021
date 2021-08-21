import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import cc from 'classcat';

// Components
import Icon from '../../atoms/Icon';

// Types
import { PreviousAndNextArticleProps } from './previous-and-next-article.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Styles
import css from './previous-and-next-article.module.scss';

const PreviousAndNextArticle: React.FC<PreviousAndNextArticleProps> = ({
    id = '',
    currentArticleData: { url: currentArticleBackgroundImageUrl = '' } = {},
    nextArticleData: {
        nextArticleBackgroundImage: {
            url: nextArticleBackgroundImageUrl = '',
        } = {},
        nextArticleSlug = '',
    } = {},
    previousArticleData: {
        previousArticleBackgroundImage: {
            url: previousArticleBackgroundImageUrl = '',
        } = {},
        previousArticleSlug = '',
    } = {},
}) => {
    return (
        <section id={id} className={css.container}>
            {previousArticleSlug !== '' && (
                <div
                    className={cc([css.articleContainer, css.background])}
                    style={{
                        backgroundImage: `url(${previousArticleBackgroundImageUrl})`,
                    }}
                >
                    <Link href={previousArticleSlug}>
                        <a className={cc([css.link, css.left])}>
                            <div className={css.label}>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Icon
                                        className={cc([css.carot, css.reverse])}
                                        icon={IconType['DoubleCarot']}
                                        alt='Previous Item Button'
                                    />
                                </motion.div>
                                <span className={css.text}>
                                    Previous Portfolio Item
                                </span>
                            </div>
                        </a>
                    </Link>
                </div>
                )
            }
            <div
                className={cc([css.returnContainer, css.background])}
                style={{
                    backgroundImage: `url(${currentArticleBackgroundImageUrl})`,
                }}
            >
                <Link href='/archive'>
                    <a className={cc([css.returnLink, css.link])}>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Icon
                                className={css.menu}
                                icon={IconType['MenuButton']}
                                alt='Menu Item Button'
                            />
                        </motion.div>
                        <span className={css.text}>Return to Archive</span>
                    </a>
                </Link>
            </div>
            {nextArticleSlug !== '' && (
                <div
                className={cc([css.articleContainer, css.background])}
                style={{
                    backgroundImage: `url(${nextArticleBackgroundImageUrl})`,
                }}
            >
                <Link href={nextArticleSlug}>
                    <a className={cc([css.link, css.right])}>
                        <div className={css.label}>
                            <span className={css.text}>
                                Next Portfolio Item
                            </span>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon
                                    className={css.carot}
                                    icon={IconType['DoubleCarot']}
                                    alt='Previous Item Button'
                                />
                            </motion.div>
                        </div>
                    </a>
                </Link>
            </div>
            )}
        </section>
    );
};

export default PreviousAndNextArticle;
