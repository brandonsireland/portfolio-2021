import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';

const Footer = dynamic(() => import('../organisms/Footer'));

import ArchiveGrid from '../organisms/ArchiveGrid';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { NavigationProps } from '../organisms/Navigation/navigation.types';
import { FooterProps } from '../organisms/Footer/footer.types';

export interface ArchivePageTemplateProps {
    meta: MetaProps;
    navigation: NavigationProps;
    footer: FooterProps;
    pages: any[];
}

const ArchivePageTemplate: React.FC<ArchivePageTemplateProps> = ({
    meta = {},
    navigation = {},
    footer = {},
    pages,
}) => (
    <Fragment>
        <Meta {...meta} />
        <Cursor />
        <Navigation {...navigation} isFixed={false} />
        <LazyMotion features={domAnimation}>
            <m.div exit={{ opacity: 0 }}>
                <ArchiveGrid portfolioItems={pages} />
            </m.div>
        </LazyMotion>
        <Footer {...footer} />
    </Fragment>
);

export default ArchivePageTemplate;
