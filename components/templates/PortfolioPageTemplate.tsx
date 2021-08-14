import React, { Fragment } from 'react';

// Components
import Meta from '../atoms/Meta';
import ComponentResolver from '../atoms/ComponentResolver';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';

export interface PortfolioPageTemplateProps {
    meta: MetaProps;
    navigation: any;
    contentBlocks: ComponentResolverProps[] | [];
    footer: any;
}

const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks = [],
    footer = {},
}) => {
    return (
        <Fragment>
            <Meta {...meta} />
            <Cursor />
            <Navigation {...navigation} isFixed />
            {contentBlocks &&
                contentBlocks.map(({ id, contentTypeId, ...data }) => (
                    <ComponentResolver
                        key={id}
                        id={id}
                        contentTypeId={contentTypeId}
                        data={data}
                    />
                ))}
            <Footer {...footer} />
        </Fragment>
    );
};

export default PortfolioPageTemplate;
