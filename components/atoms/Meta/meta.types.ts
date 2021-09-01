import { BasePictureProps } from '../BasePicture/base-picture.types';

export interface MetaProps {
    title?: string;
    description?: string;
    openGraphImage?: BasePictureProps;
    twitterImage?: BasePictureProps;
    keywords?: string;
}
