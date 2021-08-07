import { ImageProps } from '../../../types/image.types';

export interface HomePageSlideProps {
    id: string;
    slug: string;
    projectName: string;
    backgroundImage: ImageProps;
    foregroundImage: ImageProps;
    foregroundLogo: ImageProps;
}