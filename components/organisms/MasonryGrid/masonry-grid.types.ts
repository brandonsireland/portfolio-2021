import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface MasonryGridProps {
    id: string;
    title: string;
    titleLeft?: boolean;
    masonryPhotos: BasePictureProps[];
}
