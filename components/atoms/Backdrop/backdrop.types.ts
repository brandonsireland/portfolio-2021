import { BaseVideoProps } from '../BaseVideo/base-video.types';

export interface BackdropProps {
    backdrop: string;
    backgroundColor?: string;
    backdropClass?: string;
    isStatic?: boolean;
    fill?: boolean;
    video?: BaseVideoProps;
    type?: 'image' | 'video' | 'both';
    backdropOpacity?: number;
    query?: string;
    overflow?: boolean;
    alt?: string;
}
