export interface CarouselProps {
    className?: string;
    carouselClassName?: string;
    itemWidth?: string;
    itemClassName?: string;
    width?: number;
    height?: number;
    options?: Record<string, unknown>;
    navOptions?: [];
    renderNav?: boolean;
    passMeCarousel?: (Class: any) => void;
}
