import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { BaseVideoProps } from '../../atoms/BaseVideo/base-video.types';

export interface ArchiveItemProps {
    backgroundImage: BasePictureProps;
    slug: string;
    title: string;
    backgroundVideo: BaseVideoProps;
}