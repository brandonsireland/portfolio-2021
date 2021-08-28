import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface HeaderProps {
    id: string;
    title: string;
    backgroundImage: BasePictureProps;
    thumbnailImage?: BasePictureProps;
}
