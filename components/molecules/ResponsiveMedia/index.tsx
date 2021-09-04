import React, { Fragment, useEffect, useState } from 'react';
import cc from 'classcat';
import { useInView } from 'react-intersection-observer';

// Hooks
import useWindowSize from '../../../hooks/useWindowSize';
import useNativeLazyLoading from '../../../hooks/useNativeLazyLoading';

// Types
import { ResponsiveMediaProps } from './responsive-media.types';

// Styles
import css from './responsive-media.module.scss';

const getImgKey = (viewWidth: number) => {
    switch (true) {
        case viewWidth >= 1024:
            return 'w1024Up';

        case viewWidth >= 768 && viewWidth < 1024:
            return 'w1023';

        case viewWidth >= 576 && viewWidth < 768:
            return 'w767';

        case viewWidth < 576:
            return 'w575';

        default:
            return 'default';
    }
};

const defaultConfig = {
    defaultKey: 'default',
    queryBreakpoints: [
        {
            key: 'w1024up',
            minWidth: '1024px',
            maxWidthQuery: '&w=1920',
            quality: '?q=73',
        },
        {
            key: 'w1023',
            minWidth: '768px',
            maxWidthQuery: '&w=1023',
            quality: '?q=73',
        },
        {
            key: 'w767',
            minWidth: '576px',
            maxWidthQuery: '&w=767',
            quality: '?q=73',
        },
        {
            key: 'w575',
            minWidth: null,
            maxWidthQuery: '&w=575',
            quality: '?q=73',
        },
    ],
};

const ResponsiveMedia: React.FC<ResponsiveMediaProps> = ({
    srcset = {},
    alt = '',
    queries,
    imageClass = '',
    bypassInView = false
}) => {
    const { width = 768 } = useWindowSize();
    const [generatedBreak, setGeneratedBreak] = useState<any>(null);
    const supportsLazyLoading = useNativeLazyLoading();
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
        skip: supportsLazyLoading !== false,
    });

    const generateBreakpoints = ({
        defaultKey = '',
        queryBreakpoints = [],
    }: typeof defaultConfig) => {
        const computedDefault: any = {
            computedDefault() {
                return srcset[defaultKey]?.url;
            },
        };

        const computedBreakpoints = queryBreakpoints.reduce((acc, curr) => {
            const computedKey = curr.key;

            acc[computedKey] = function () {
                let src = computedDefault.computedDefault();
                let maxWidth = curr.maxWidthQuery;
                let fit = '';
                let maxHeight = '';
                let quality = curr.quality;

                if (srcset[curr.key]?.url) {
                    src = srcset[curr.key].url;
                }

                if (
                    queries &&
                    queries[curr.key] &&
                    queries[curr.key].maxWidthQuery
                ) {
                    maxWidth = queries[curr.key].maxWidthQuery;
                }

                if (
                    queries &&
                    queries[curr.key] &&
                    queries[curr.key].maxHeightQuery
                ) {
                    maxHeight = queries[curr.key].maxHeightQuery;
                }

                if (queries && queries[curr.key] && queries[curr.key].quality) {
                    quality = queries[curr.key].quality;
                }

                if (queries && queries[curr.key] && queries[curr.key].fit) {
                    fit = queries[curr.key].fit;
                }

                return src + quality + maxWidth + maxHeight + fit;
            };

            return acc;
        }, {});

        return { ...computedDefault, ...computedBreakpoints };
    };

    useEffect(() => {
        setGeneratedBreak(generateBreakpoints(defaultConfig));
    }, []);
    
    return (
        <div ref={ref} className={css.pictureContainer}>
            {bypassInView || inView || supportsLazyLoading ? (
                <picture>
                    {defaultConfig.queryBreakpoints &&
                        defaultConfig.queryBreakpoints.map(
                            ({ key, minWidth }) => {
                                if (generatedBreak === null) return;
                                return (
                                    <Fragment key={key}>
                                        <source
                                            key={key + 'webp'}
                                            srcSet={
                                                generatedBreak
                                                    ? `${generatedBreak[
                                                          key
                                                      ]()}&fm=webp`
                                                    : ''
                                            }
                                            media={
                                                minWidth
                                                    ? `(min-width: ${minWidth})`
                                                    : ''
                                            }
                                            type='image/webp'
                                        />
                                        <source
                                            key={key + 'base'}
                                            srcSet={
                                                generatedBreak
                                                    ? generatedBreak[key]()
                                                    : ''
                                            }
                                            media={
                                                minWidth
                                                    ? `(min-width: ${minWidth})`
                                                    : ''
                                            }
                                        />
                                    </Fragment>
                                );
                            },
                        )}
                    <img
                        key={getImgKey(width)}
                        className={cc([css.img, imageClass])}
                        src={
                            generatedBreak
                                ? generatedBreak['computedDefault']()
                                : ''
                        }
                        loading='lazy'
                        alt={alt}
                    />
                </picture>
            ) : null}
        </div>
    );
};

export default ResponsiveMedia;
