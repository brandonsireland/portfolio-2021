import { SrcSetProps } from '../../molecules/ResponsiveMedia/responsive-media.types';

export interface MasonryGridProps {
    id: string;
    title: string;
    titleLeft?: boolean;
    masonryMedia: SrcSetProps[];
}
