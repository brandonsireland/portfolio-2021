import React from 'react';

// Components
import BeautifyJSON from '../BeautifyJSON';
import HomePageCarousel from '../../organisms/HomePageCarousel';
import Header from '../../organisms/Header';
import MasonryGrid from '../../organisms/MasonryGrid';
import SiteInformation from '../../organisms/SiteInformation';

// Types
import { ComponentResolverProps } from './component-resolver.types';

export const components = {
    contentBlockSlider: HomePageCarousel,
    contentBlockHeader: Header,
    contentBlockSiteInformation: SiteInformation,
    contentBlockMasonryImages: MasonryGrid,
};


const ComponentResolver: React.FC<ComponentResolverProps> = ({
    contentTypeId,
    id = '',
    data,
}) => {
    const Component = components[contentTypeId];

    if (!Component) {
        return <BeautifyJSON>{data}</BeautifyJSON>;
    }

    return <Component id={id} {...data} />;
};

export default ComponentResolver;
