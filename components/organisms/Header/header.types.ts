import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { SrcSetProps } from '../../molecules/ResponsiveMedia/responsive-media.types';

export interface HeaderProps {
    id: string;
    title: string;
    media: SrcSetProps;
    thumbnailImage?: BasePictureProps;
}
