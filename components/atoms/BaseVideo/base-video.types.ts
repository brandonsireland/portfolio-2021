export interface BaseVideoProps {
    contentType?: string;
    url?: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    playsInline?: boolean;
    className?: string;
    poster?: string;
}