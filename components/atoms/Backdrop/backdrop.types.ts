import { BaseVideoProps } from "../BaseVideo/base-video.types";
import { ResponsiveImageProps } from "../ResponsiveImage/responsive-image.types";


export interface BackdropProps {
    backdrop: ResponsiveImageProps | string;
    backgroundColor?: string;
    backdropClass?: string;
    isStatic?: boolean;
    fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb';
    f?: 'center' | 'top' | 'right' | 'left' | 'bottom' | 'top_right' | 'top_left' | 'bottom_right' | 'bottom_left' | 'face' | 'faces';
    fill?: boolean;
    video?: BaseVideoProps;
    type?: 'image' | 'video' | 'both';
    backdropOpacity?: number;
    query?: string;
    overflow?: boolean;
}