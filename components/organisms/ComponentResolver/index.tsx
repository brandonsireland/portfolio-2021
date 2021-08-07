import React from 'react';

// Components
import HomePageCarousel from '../HomePageCarousel'

// Types
import { ComponentResolverProps } from './ComponentResolver.types';

const components = {
    contentBlockSlider: HomePageCarousel
}

import css from './ComponentResolver.module.scss';

const ComponentResolver: React.FC<ComponentResolverProps> = ({ contentBlocks = [] }) => {
    return (
        <div className={css.container}>
            {contentBlocks.map(({ id, contentTypeId, ...props }) => {
                const Component = components[contentTypeId];

                if (!Component) {
                    console.error(`contentTypeId ${contentTypeId} is note defined in components`);
                    return null;
                }

                return <Component key={id} {...props} />;
            })}
        </div>
    );
}
 
export default ComponentResolver;