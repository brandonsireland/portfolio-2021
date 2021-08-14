import React from 'react';
import cc from 'classcat';

import { AspectProps } from './aspect-ratio.types';

import css from './aspect-ratio.module.scss';

const Aspect: React.FC<AspectProps> = ({
    className,
    ratio,
    visibleOverflow,
    children,
}) => {
    const classes = cc([
        css.base,
        {
            [css.visibleOverflow]: visibleOverflow,
            [css.ratio16x9]: ratio === '16x9',
        },
        className,
    ]);

    return <div className={classes}>{children}</div>;
};

export default Aspect;
