import { SrcSetProps } from '../ResponsiveMedia/responsive-media.types';

export interface BackdropProps {
    backdrop?: string | SrcSetProps;
    backgroundColor?: string;
    backdropClass?: string;
    isStatic?: boolean;
    fill?: boolean;
    type?: 'image' | 'video';
    backdropOpacity?: number;
    query?: any;
    overflow?: boolean;
    alt?: string;
    bypassInView?: boolean;
}
