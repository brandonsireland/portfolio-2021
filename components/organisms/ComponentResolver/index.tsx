import React, { Fragment } from 'react';

import Hero from '../Hero';

const components = {
    componentHero: Hero,
}

export interface ComponentResolverProps {
    contentBlocks: ({
        id: string,
        contentTypeId: string,
    })[];
}

const ComponentResolver: React.FC<ComponentResolverProps> = ({ contentBlocks = [] }) => {
    return (
        <Fragment>
            {contentBlocks.map(({ id, contentTypeId, ...props }) => {
                const Component = components[contentTypeId];

                if (!Component) {
                    console.error(`contentTypeId ${contentTypeId} is note defined in components`);
                    return null;
                }

                return <Component key={id} {...props} />;
            })}
        </Fragment>
    );
}
 
export default ComponentResolver;