import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { SrcSetProps } from '../ResponsiveMedia/responsive-media.types';

export interface HomePageSlideProps {
    id: string;
    slug: string;
    projectName: string;
    backgroundMedia: SrcSetProps;
    foregroundImage: BasePictureProps;
    foregroundLogo: BasePictureProps;
}
