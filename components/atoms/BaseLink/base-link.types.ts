import { BaseLinkTypes } from "./base-link.enum";

export interface BaseLinkProps {
    href: string;
    target?: BaseLinkTypes;
    label?: string;
    className?: string;
};