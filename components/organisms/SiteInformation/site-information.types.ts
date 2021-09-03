import { BaseLinkProps } from '../../atoms/BaseLink/base-link.types';
import { CategoryProps } from '../../molecules/Category/category.types';
import { SrcSetProps } from '../../molecules/ResponsiveMedia/responsive-media.types';

export interface SiteInformationProps {
    id: string;
    siteUrl: BaseLinkProps;
    yearCreated: Date;
    agencyAssociatedWith: CategoryProps;
    role: string;
    categories: CategoryProps[];
    description: string;
    imageLeft: boolean;
    media?: SrcSetProps
}
