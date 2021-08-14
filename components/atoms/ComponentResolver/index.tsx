import React from 'react';

// Components
import BeautifyJSON from '../BeautifyJSON';
import HomePageCarousel from '../../organisms/HomePageCarousel';
import BaseHeader from '../../molecules/BaseHeader';
import Categories from '../../molecules/Categories';

// Types
import { ComponentResolverProps } from './Component-resolver.types';

export const components = {
    contentBlockSlider: HomePageCarousel,
    contentBlockHeader: BaseHeader,
    contentBlockCategories: Categories,
};


const ComponentResolver: React.FC<ComponentResolverProps> = ({
    contentTypeId,
    id = '',
    data,
}) => {
    console.log(data);
    const Component = components[contentTypeId];

    if (!Component) {
        return <BeautifyJSON>{data}</BeautifyJSON>;
    }

    return <Component id={id} {...data} />;
};

export default ComponentResolver;
