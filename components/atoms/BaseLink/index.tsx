import React from 'react';
import Link from 'next/link';
import cc from 'classcat';

import { BaseLinkProps } from './base-link.types'
import Targets from './base-link.data';

// Styles
import css from './link.module.scss';

const BaseLink: React.FC<BaseLinkProps> = ({ href, target = 'Blank', className, children }) => {
    const linkPattern = /^((http|https|ftp):\/\/)/;
    
    const classes = cc([
        css.link,
        className,
    ])

    return linkPattern.test(href) ? (
        <a className={classes} href={href} target={Targets[target]}>
            {children}
        </a>
    ) : (
        <Link href={href}>
            <a className={classes}>{children}</a>
        </Link>
    );
};

export default BaseLink;
