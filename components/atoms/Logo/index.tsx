import React from 'react';
import cc from 'classcat';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';

// Styles
import css from './logo.module.scss';

// Hooks
import useScroll from '../../../hooks/useScroll';

const Logo: React.FC = () => {
    const { pathLength, isNearTop, isComplete } = useScroll(0, 720);
    return (
        <Link href='/'>
            <a className={css.container}>
                <LazyMotion features={domAnimation}>
                    <svg
                        className={cc([
                            css.svg,
                            css.outer,
                            { [css.animation]: isNearTop || isComplete },
                        ])}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1842.23 1842.22'
                    >
                        <m.path
                            fill='#fff'
                            d='M1635.6 364.87a13.47 13.47 0 00-1.15 17.67c113.46 149.9 180.86 336.5 180.86 538.57s-67.4 388.67-180.87 538.58a13.44 13.44 0 001.16 17.66 13.47 13.47 0 0020.24-1.31c116.93-154.43 186.39-346.72 186.39-554.93s-69.45-400.49-186.39-554.93a13.48 13.48 0 00-20.24-1.31zM364.87 206.62a13.46 13.46 0 0017.67 1.16C532.44 94.32 719 26.91 921.11 26.91s388.67 67.41 538.58 180.87a13.44 13.44 0 0017.66-1.16 13.47 13.47 0 00-1.3-20.23C1321.61 69.45 1129.32 0 921.11 0S520.62 69.45 366.18 186.39a13.47 13.47 0 00-1.31 20.23zM1477.35 1635.6a13.44 13.44 0 00-17.66-1.16c-149.91 113.46-336.51 180.87-538.58 180.87s-388.67-67.41-538.57-180.87a13.44 13.44 0 00-17.66 1.16 13.48 13.48 0 001.3 20.24c154.44 116.93 346.73 186.38 554.93 186.38s400.49-69.45 554.93-186.38a13.47 13.47 0 001.31-20.24zM206.62 1477.35a13.44 13.44 0 001.16-17.66C94.32 1309.78 26.91 1123.18 26.91 921.11s67.41-388.67 180.87-538.57a13.46 13.46 0 00-1.16-17.67 13.47 13.47 0 00-20.23 1.31C69.45 520.62 0 712.91 0 921.11s69.45 400.5 186.39 554.89a13.46 13.46 0 0020.23 1.31z'
                            style={{
                                rotate: pathLength,
                            }}
                        />
                    </svg>
                    <svg
                        className={cc([
                            css.svg,
                            css.middle,
                            { [css.animation]: isNearTop || isComplete },
                        ])}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1672.24 1672.24'
                    >
                        <m.path
                            fill='#fff'
                            d='M26.74 713C80.23 360 360 80.23 713 26.74a13.43 13.43 0 0011.49-13.26A13.43 13.43 0 00709.13.15c-364.76 55.18-653.8 344.22-709 709a13.43 13.43 0 0013.33 15.35A13.43 13.43 0 0026.74 713zM959.25 26.74C1312.28 80.23 1592 360 1645.49 713a13.44 13.44 0 0013.27 11.49 13.42 13.42 0 0013.32-15.35c-55.17-364.76-344.22-653.8-709-709a13.44 13.44 0 00-15.36 13.33 13.43 13.43 0 0011.53 13.27zM713 1645.49C360 1592 80.23 1312.28 26.74 959.25a13.43 13.43 0 00-13.26-11.5A13.44 13.44 0 00.15 963.11c55.18 364.75 344.22 653.8 709 709a13.42 13.42 0 0015.35-13.32 13.44 13.44 0 00-11.5-13.3zM1645.49 959.25c-53.48 353-333.21 632.76-686.24 686.24a13.44 13.44 0 00-11.5 13.27 13.43 13.43 0 0015.36 13.32c364.75-55.17 653.8-344.22 709-709a13.43 13.43 0 00-13.32-15.36 13.44 13.44 0 00-13.3 11.53z'
                            style={{
                                rotate: pathLength,
                                scaleX: -1,
                            }}
                        />
                    </svg>
                    <svg
                        className={cc([
                            css.svg,
                            css.inner,
                            { [css.animation]: isNearTop || isComplete },
                        ])}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1535.85 1535.85'
                    >
                        <m.path
                            fill='#fff'
                            d='M311.09 167.63a12.18 12.18 0 0015.91 1.13c261.21-192.48 620.7-192.48 881.91 0a12.18 12.18 0 0015.88-1.13 12.23 12.23 0 00-1.31-18.46c-269.81-198.89-641.23-198.89-911 0a12.23 12.23 0 00-1.39 18.46zM1368.22 311.09a12.2 12.2 0 00-1.13 15.88c192.49 261.21 192.49 620.7 0 881.91a12.2 12.2 0 001.13 15.88 12.22 12.22 0 0018.46-1.31c198.9-269.81 198.9-641.23 0-911a12.23 12.23 0 00-18.46-1.36zM149.17 312.4c-198.89 269.82-198.89 641.24 0 911.05a12.22 12.22 0 0018.46 1.31 12.18 12.18 0 001.13-15.88c-192.48-261.21-192.48-620.7 0-881.91a12.18 12.18 0 00-1.13-15.88 12.23 12.23 0 00-18.46 1.31zM311.09 1368.22a12.23 12.23 0 001.31 18.46c269.82 198.9 641.24 198.9 911.05 0a12.23 12.23 0 001.31-18.46 12.2 12.2 0 00-15.88-1.13c-261.21 192.49-620.7 192.49-881.91 0a12.2 12.2 0 00-15.88 1.13z'
                            style={{
                                rotate: pathLength,
                            }}
                        />
                    </svg>
                    <svg
                        className={cc([css.svg, css.initials])}
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 677.28 633.45'
                    >
                        <path
                            fill='#fff'
                            d='M15.36 631.65a15.62 15.62 0 01-10.84-4.07Q0 623.52 0 616.28V15.36A13.34 13.34 0 014.52 5 15.62 15.62 0 0115.36.9h151.81a475.13 475.13 0 0180.88 6.78q39.3 6.78 70 24.85a136.94 136.94 0 0149.25 49.7q18.51 31.65 18.52 81.33a142.22 142.22 0 01-2.71 28c-.6 4.83-2.57 8.14-5.87 9.94a23.23 23.23 0 01-11.3 2.71 18.86 18.86 0 01-9.94-6.31c-2.41-3-3-6.62-1.8-10.85q.88-5.42 1.35-11.29t.45-12.2q0-42.46-16.26-68.68a109.4 109.4 0 00-43.38-40.21q-27.11-14-60.54-19a468.48 468.48 0 00-68.68-5H29.82v585.61q0 15.38-14.46 15.37zm186.15-80.43H94.88q-14.46 0-14.46-15.36V92.17q0-14.44 14.46-14.46h92.17q37.95 0 60.55 9.94t34.79 24.85q12.19 14.91 15.81 31.63a145.25 145.25 0 013.62 30.27c0 3.62-.16 8.45-.46 14.46a76 76 0 01-3.16 18.07 51.91 51.91 0 01-7.2 15.37q-4.53 6.33-11.75 6.32c-3 0-5.12-.3-6.32-.9a15.34 15.34 0 01-7.68-8.59 13.4 13.4 0 01.45-11.29q6.3-13.56 6.3-33.44 0-39.75-24.4-53.31t-60.55-13.56h-76.81V521.4h91.27a397.14 397.14 0 0039.76-1.81q18.07-1.8 30.73-9t19.42-21.69q6.78-14.44 6.78-39.76t-6.78-40.66a56.78 56.78 0 00-19.88-24.4 77.72 77.72 0 00-30.72-12.2 224.25 224.25 0 00-39.31-3.17h-36.14a13.32 13.32 0 01-10.4-4.51 15.64 15.64 0 01-4.06-10.85q0-14.44 14.46-14.45h36.14q28 0 51.06 5.42t39.76 18.52a89.42 89.42 0 0126.2 33.89q9.5 20.79 9.49 52.41 0 32.53-9.49 52.41t-26.2 31.18q-16.74 11.27-39.76 14.88a331 331 0 01-51.06 3.61zM225 631.65H95.78q-14.46 0-14.45-14.46a15.71 15.71 0 014.06-10.85 13.39 13.39 0 0110.39-4.52H225q74.08 0 112.5-42.47t38.4-115.66q0-76.8-39.3-115.22t-115.22-38.4h-56a15.65 15.65 0 01-10.86-4.07 13.32 13.32 0 01-4.52-10.39 15.43 15.43 0 0115.37-15.36h56q87.64 0 136 47t48.34 136.45q0 85.86-47 136.9T225 631.65zM352.42 253q-10.85-2.72-14.46-8.58t-.9-13.11q2.7-10.85 15.36-10.84a12.82 12.82 0 015.42.9 13.69 13.69 0 019 7.68 19.39 19.39 0 01.9 13.11Q363.25 253 352.42 253zM660.56 52.41a15.67 15.67 0 0110.84 4.07 13.36 13.36 0 014.52 10.39v248.5a15.42 15.42 0 01-15.36 15.36h-66.87v287.36a15.43 15.43 0 01-15.36 15.36 13.36 13.36 0 01-10.39-4.52 15.67 15.67 0 01-4.07-10.84V315.37q0-14.46 14.46-14.46h67.77v-234q0-14.5 14.46-14.5zm-95.78-37Q564.78.9 579.23.9q15.36 0 15.36 14.46V234q0 14.44-15.36 14.46-14.46 0-14.45-14.46zM660.56 0q12.65 0 15.36 10.84v.91a15.41 15.41 0 010 12.65q-2.7 6.32-9.94 8.13a6.11 6.11 0 00-2.71.45 6.35 6.35 0 01-2.71.45q-10.84 0-15.36-10.84v-.9A18.35 18.35 0 01646.1 9a13.51 13.51 0 019-8.14zm15.36 551.22a15.43 15.43 0 01-15.36 15.36 13.36 13.36 0 01-10.39-4.52 15.67 15.67 0 01-4.07-10.84V395.79q0-14.46 14.46-14.45a15.67 15.67 0 0110.84 4.06 13.36 13.36 0 014.52 10.39z'
                        />
                    </svg>
                </LazyMotion>
            </a>
        </Link>
    );
};

export default Logo;
