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
    const getRatio = () => {
        if (typeof ratio === 'string') {
            const [width, height] = ratio.split('x');
            return `${Number(height) / Number(width) * 100}%`
        }

        return '100%';
    }
    
    const classes = cc([
        css.base,
        {
            [css.visibleOverflow]: visibleOverflow,
        },
        className,
    ]);

    return <div className={classes} style={{paddingTop: getRatio()}}>{children}</div>;
};

export default Aspect;
