import React, { useContext } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import cc from 'classcat';

// Components
import Icon from '../../atoms/Icon';
import Backdrop from '../../atoms/Backdrop';

// Types
import { PreviousAndNextArticleProps } from './previous-and-next-article.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Context
import { LocalizedStringsContext } from '../../../context/LocalizedStringContext';

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
                            backdrop={previousArticleBackgroundImageUrl}
                            backdropClass={css.background}
                            query='?w=707&h=300&q=70&fit=fill'
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
                                            {localizedStrings['previous-item']}
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
                        backdrop={currentArticleBackgroundImageUrl}
                        backdropClass={css.background}
                        query='?w=490&h=300&q=70&fit=fill'
                    >
                        <Link href='/archive'>
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
                            backdrop={nextArticleBackgroundImageUrl}
                            backdropClass={css.background}
                            query='?w=707&h=300&q=70&fit=fill'
                        >
                            <Link href={nextArticleSlug}>
                                <a className={css.link}>
                                    <div className={css.label}>
                                        <span className={css.text}>
                                            {localizedStrings['next-item']}
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
