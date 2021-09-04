import React, { Fragment } from 'react';
import cc from 'classcat';

// Components
import BaseVideo from '../../atoms/BaseVideo';
import ResponsiveMedia from '../ResponsiveMedia';

// Types
import { BackdropProps } from './backdrop.types';

// Styles
import css from './backdrop.module.scss';

const Backdrop: React.FC<BackdropProps> = ({
    backdrop = {},
    backgroundColor,
    backdropClass,
    isStatic = false,
    fill = false,
    type = 'image',
    backdropOpacity = 1,
    query,
    overflow = true,
    rootMargin,
    triggerOnce,
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
                    {typeof backdrop !== 'string' && type === 'image' ? (
                        <ResponsiveMedia
                            srcset={backdrop}
                            queries={query}
                            imageClass={css.img}
                            triggerOnce={triggerOnce}
                            rootMargin={rootMargin}
                        />
                    ) : null}

                    {typeof backdrop === 'object' && type === 'video' && (
                        <BaseVideo
                            className={css.video}
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                            url={backdrop?.default?.url}
                            poster={backdrop?.poster?.url}
                        />
                    )}
                </div>
            </div>

            {children}
        </div>
    </Fragment>
);

export default Backdrop;
