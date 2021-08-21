import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';

export interface HomePageSlideProps {
    id: string;
    slug: string;
    projectName: string;
    backgroundImage: BasePictureProps;
    foregroundImage: BasePictureProps;
    foregroundLogo: BasePictureProps;
}
