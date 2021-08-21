import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface BaseHeaderProps {
    id: string;
    title: string;
    backgroundImage: BasePictureProps;
    thumbnailImage: BasePictureProps;
}
