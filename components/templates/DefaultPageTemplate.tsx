import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import ComponentResolver from '../atoms/ComponentResolver';
import InitialTransition from '../molecules/InitialTransition';

const Footer = dynamic(() => import('../organisms/Footer'));

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
    isFirstMount?: boolean;
}

const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks,
    footer = {},
    isFirstMount,
}) => (
    <Fragment>
        <Meta {...meta} />
        <Cursor />
        {isFirstMount && <InitialTransition />}
        <Navigation {...navigation} isFixed={false} />
        <LazyMotion features={domAnimation}>
            <m.div exit={{ opacity: 0 }}>
                {contentBlocks &&
                    contentBlocks.map(({ id, contentTypeId, ...data }) => (
                        <ComponentResolver
                            key={id}
                            id={id}
                            contentTypeId={contentTypeId}
                            data={data}
                        />
                    ))}
            </m.div>
        </LazyMotion>
        <Footer {...footer} />
    </Fragment>
);

export default DefaultPageTemplate;
