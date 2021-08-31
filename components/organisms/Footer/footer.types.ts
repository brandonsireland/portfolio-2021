import { CategoryProps } from '../../molecules/Category/category.types';

export interface FooterType {
    id?: string;
    footerItems?: CategoryProps[];
}

export interface FooterProps {
    footer?: FooterType;
}
