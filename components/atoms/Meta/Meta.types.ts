import { ImageProps } from '../../../types/image.types';

export interface MetaProps {
    title: string;
    description: string;
    keywords: Array<string>;
    twitterImage: ImageProps;
    openGraphImage: ImageProps;
}