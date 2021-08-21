import { BaseLinkTypes } from './base-link.enum';

export interface BaseLinkProps {
    id?: string;
    href: string;
    target?: BaseLinkTypes;
    label?: string;
    className?: string;
}
