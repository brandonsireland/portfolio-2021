import React, { useEffect, useRef } from 'react';
import cc from 'classcat';

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
    pause = false,
    className = '',
    poster = '',
}) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!ref.current) return null;

            if (pause) {   
                ref.current.pause();
            }

            ref.current.play();

    }, [ref])
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
