import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface ImageAndTextProps {
    id: string;
    image: BasePictureProps;
    backgroundImage?: BasePictureProps;
    imageLeft: boolean;
    content: string;
}
