import { BaseLinkProps } from '../../atoms/BaseLink/base-link.types';
import { BasePictureProps } from '../../atoms/BasePicture/base-picture.types';
import { CategoryProps } from '../../molecules/Category/category.types';

export interface SiteInformationProps {
    id: string;
    siteUrl: BaseLinkProps;
    yearCreated: Date;
    agencyAssociatedWith: CategoryProps;
    role: string;
    categories: CategoryProps[];
    description: string;
    image: BasePictureProps;
    imageLeft: boolean;
}
