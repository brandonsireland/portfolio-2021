import React, { useEffect } from 'react';
import cc from 'classcat';
import { useInView } from 'react-intersection-observer';

// Types
import { BaseVideoProps } from './base-video.types';

// Styles
import css from './base-video.module.scss';

const BaseVideo: React.FC<BaseVideoProps> = ({
    contentType = 'video/webm',
    url = '',
    playsInline = false,
    autoPlay = false,
    muted = false,
    loop = false,
    controls = false,
    className = '',
    poster = '',
}) => {
    const { ref, inView, entry } = useInView({
        threshold: 0.1,
        rootMargin: '200px 0px',
    });
    
    useEffect(() => {
        inView ? entry?.target?.play() : entry?.target?.pause();
    },[inView])

    return (
        <video
            ref={ref}
            controls={controls}
            autoPlay={autoPlay}
            playsInline={playsInline}
            muted={muted}
            loop={loop}
            poster={poster}
            className={cc([css.video, className])}
        >
            <source type={contentType} src={url} />
        </video>
    );
};

export default BaseVideo;
