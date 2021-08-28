export interface BasePictureProps {
    src?: string;
    alt?: string;
    url?: string;
    size?: number;
    width?: number;
    height?: number;
    fileName?: string;
    contentType?: string;
    id?: string;
    title?: string;
}


export type BasePictureTypes = {
    image?: BasePictureProps;
    query?: string;
    imgClass?: string;
    pictureClass?: string;
}