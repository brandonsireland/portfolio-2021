import { CategoryProps } from '../../molecules/Category/category.types';

export interface FooterProps {
    id: string;
    footerItems: CategoryProps[];
}

export interface FooterType {
    footer?: FooterProps;
}
