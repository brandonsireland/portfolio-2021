import React, { Fragment } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import ComponentResolver from '../atoms/ComponentResolver';
import Modal from '../atoms/Modal';
import InitialTransition from '../molecules/InitialTransition';

// Types
import { MetaType } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';
import { NavigationType } from '../organisms/Navigation/navigation.types';
import { FooterType } from '../organisms/Footer/footer.types';

export interface DefaultPageTemplateProps {
    meta: MetaType;
    navigation: NavigationType;
    contentBlocks: ComponentResolverProps[];
    footer: FooterType;
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
        <Modal />
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
