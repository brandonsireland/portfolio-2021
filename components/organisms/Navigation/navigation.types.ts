import { BaseLinkProps } from '../../atoms/BaseLink/base-link.types';

export interface NavigationType {
    navigationItems?: BaseLinkProps[];
}

export interface NavigationProps {
    navigation?: NavigationType;
    isFixed: boolean;
}
