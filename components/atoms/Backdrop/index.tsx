import React, { Fragment } from 'react';
import cc from 'classcat';

// Components
import BaseVideo from '../BaseVideo';

// Types
import { BackdropProps } from './backdrop.types';

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
}) => (
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
                    <picture>
                        <source
                            srcSet={`${backdrop}${query}${
                                query !== '' ? '&' : '?'
                            }fm=webp`}
                            type='image/webp'
                        ></source>
                        <img className={css.img} src={`${backdrop}${query}`} alt={alt}/>
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

export default Backdrop;
