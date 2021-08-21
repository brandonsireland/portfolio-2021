import React from 'react';
import cc from 'classcat';

// Components
import ParallaxChildren from '../../atoms/ParallaxChildren';
import Markdown from '../../atoms/Markdown';
import Aspect from '../../atoms/AspectRatio';
import BasePicture from '../../atoms/BasePicture';

// Types
import { ImageAndTextProps } from './image-and-text.types';

// Style
import css from './image-and-text.module.scss';

const ImageAndText: React.FC<ImageAndTextProps> = ({
    id = '',
    image = {},
    imageLeft = true,
    backgroundImage = {},
    content = '',
}) => {
    return (
        <section
            id={id}
            className={css.container}
            style={{
                backgroundImage:
                    backgroundImage && `url(${backgroundImage.url})`,
            }}
        >
            <div className={cc([css.inner, { [css.reverse]: !imageLeft }])}>
                <ParallaxChildren className={css.imageContainer} topOffset={0}>
                    <Aspect ratio='1x1' visibleOverflow={false}>
                        <BasePicture src={image.url} />
                    </Aspect>
                </ParallaxChildren>
                <div className={css.contentContainer}>
                    <Markdown content={content} />
                </div>
            </div>
        </section>
    );
};

export default ImageAndText;
