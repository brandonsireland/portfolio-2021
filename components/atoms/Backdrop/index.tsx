import React, { Fragment } from 'react';
import cc from 'classcat';
import { useInView } from 'react-intersection-observer';

// Components
import BaseVideo from '../BaseVideo';

// Types
import { BackdropProps } from './backdrop.types';

// Hooks
import useNativeLazyLoading from '../../../hooks/useNativeLazyLoading';

// Styles
import css from './backdrop.module.scss';

const Backdrop: React.FC<BackdropProps> = ({
    backdrop,
    alt,
    backgroundColor,
    backdropClass,
    isStatic = false,
    fill = false,
    video,
    type = 'image',
    backdropOpacity = 1,
    query = '',
    overflow = true,
    children,
}) => {
    const supportsLazyLoading = useNativeLazyLoading();
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
        skip: supportsLazyLoading !== false,
    });
    return (
        <Fragment>
            <div
                className={cc([
                    css.wrap,
                    { [css.fill]: fill, [css.overflow]: overflow },
                ])}
            >
                <div
                    className={cc([
                        css.backdropContainer,
                        { [css.overflow]: overflow },
                    ])}
                >
                    <div
                        className={cc([
                            css.backdrop,
                            backdropClass,
                            {
                                [css.isStatic]: isStatic,
                                [css.overflow]: overflow,
                            },
                        ])}
                        style={{
                            backgroundColor: backgroundColor,
                            opacity: backdropOpacity,
                        }}
                    >
                        <picture ref={ref}>
                        {inView || supportsLazyLoading ? (
                                <Fragment>
                                    <source
                                        srcSet={`${backdrop}${query}${
                                            query !== '' ? '&' : '?'
                                        }fm=webp`}
                                        type='image/webp'
                                    ></source>
                                    <img
                                        className={css.img}
                                        src={`${backdrop}${query}`}
                                        alt={alt}
                                    />
                                </Fragment>
                        ) : null}
                        </picture>

                        {type !== 'image' && video && (
                            <BaseVideo
                                className={css.video}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                                playsInline={true}
                                url={video.url}
                                poster={backdrop}
                            />
                        )}
                    </div>
                </div>

                {children}
            </div>
        </Fragment>
    );
};

export default Backdrop;
