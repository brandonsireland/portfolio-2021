import React, { Fragment } from 'react';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import ComponentResolver from '../atoms/ComponentResolver';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/Component-resolver.types';

export interface DefaultPageTemplateProps {
    meta: MetaProps;
    navigation: any;
    contentBlocks: ComponentResolverProps[] | [];
    footer: any;
}

const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks = [],
    footer = {},
}) => {
    return (
        <Fragment>
            <Meta {...meta} />
            <Cursor />
            <Navigation {...navigation} />
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

export default DefaultPageTemplate;
