import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { BaseVideoProps } from '../../atoms/BaseVideo/base-video.types';

export interface SrcSetProps {
    id?: string;
    default?: BasePictureProps | BaseVideoProps;
    w1024up?: BasePictureProps | BaseVideoProps;
    w1023?: BasePictureProps | BaseVideoProps;
    w767?: BasePictureProps | BaseVideoProps;
    w575?: BasePictureProps | BaseVideoProps;
    poster?: BasePictureProps;
}

export interface ResponsiveMediaProps {
    srcset?: SrcSetProps,
    alt?: string;
    queries?: any;
    imageClass?: string | string[];
}