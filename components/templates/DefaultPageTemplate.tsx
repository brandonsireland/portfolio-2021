import React, { Fragment } from 'react';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import ComponentResolver from '../atoms/ComponentResolver';
import Modal from '../atoms/Modal';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';
import { NavigationProps } from '../organisms/Navigation/navigation.types';
import { FooterProps } from '../organisms/Footer/footer.types';

export interface DefaultPageTemplateProps {
    meta: MetaProps;
    navigation: NavigationProps;
    contentBlocks: ComponentResolverProps[];
    footer: FooterProps;
}

const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks = [],
    footer = {},
}) => (
    <Fragment>
        <Meta {...meta} />
        <Modal />
        <Cursor />
        <Navigation {...navigation} isFixed={false}/>
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

export default DefaultPageTemplate;
