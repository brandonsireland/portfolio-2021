import React from 'react';
import cc from 'classcat';
import Link from 'next/link';

// Images
import OuterRim from '../../../public/svgs/rim-outer.svg';
import MiddleRim from '../../../public/svgs/rim-middle.svg';
import InnerRim from '../../../public/svgs/rim-inner.svg';
import Initials from '../../../public/svgs/initials.svg';

// Styles
import css from './logo.module.scss';

const Logo: React.FC = () => (
    <Link href='/'>
        <a className={css.container}>
            <img
                className={cc([css.svg, css.outer])}
                src={OuterRim}
                alt='Outer Rim SVG'
            />
            <img
                className={cc([css.svg, css.middle])}
                src={MiddleRim}
                alt='Middle Rim SVG'
            />
            <img
                className={cc([css.svg, css.inner])}
                src={InnerRim}
                alt='Inner Rim SVG'
            />
            <img
                className={cc([css.svg, css.initials])}
                src={Initials}
                alt='Initials SVG'
            />
        </a>
    </Link>
);

export default Logo;
