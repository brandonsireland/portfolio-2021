import { BaseLinkProps } from '../../atoms/BaseLink/base-link.types';

export interface NavigationType {
    navigationItems?: BaseLinkProps[];
    isFixed: boolean;
}

export interface NavigationProps {
    navigation?: NavigationType;
}
