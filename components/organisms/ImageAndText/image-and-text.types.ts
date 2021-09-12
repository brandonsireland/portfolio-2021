import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { CategoryProps } from '../../molecules/Category/category.types';

export interface ImageAndTextProps {
    id: string;
    image: BasePictureProps;
    backgroundImage?: BasePictureProps;
    imageLeft: boolean;
    content: string;
    categories: CategoryProps[];
}
