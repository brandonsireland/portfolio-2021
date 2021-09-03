import React, { Fragment } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import ComponentResolver from '../atoms/ComponentResolver';
import InitialTransition from '../molecules/InitialTransition';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';
import { NavigationProps } from '../organisms/Navigation/navigation.types';

export interface DefaultPageTemplateProps {
    meta: MetaProps;
    navigation: NavigationProps;
    contentBlocks: ComponentResolverProps[];
    isFirstMount?: boolean;
}

const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks,
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
    </Fragment>
);

export default DefaultPageTemplate;
