import React from 'react';
import dynamic from 'next/dynamic';

// Components
import HomePageCarousel from '../../organisms/HomePageCarousel';
import Header from '../../organisms/Header';
import SiteInformation from '../../organisms/SiteInformation';
import ImageAndText from '../../organisms/ImageAndText';
import ArchiveGrid from '../../organisms/ArchiveGrid';
import MasonryGrid from '../../organisms/MasonryGrid';

// Dynamic Component imports for optimization
const BeautifyJSON = dynamic(() => import('../BeautifyJSON'));

// Types
import { ComponentResolverProps } from './component-resolver.types';

export const components = {
    contentBlockSlider: HomePageCarousel,
    contentBlockHeader: Header,
    contentBlockSiteInformation: SiteInformation,
    contentBlockMasonryImages: MasonryGrid,
    contentBlockImageText: ImageAndText,
    contentBlockArchive: ArchiveGrid,
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
