import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { BaseVideoProps } from '../../atoms/BaseVideo/base-video.types';

export interface MasonryModalProps {
    id?: string;
    asset: BasePictureProps & BaseVideoProps;
}
