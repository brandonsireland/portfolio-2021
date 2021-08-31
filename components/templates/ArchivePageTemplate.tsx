import React, { Fragment } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import Grid from '../organisms/ArchiveGrid';

// Types
import { MetaType } from '../atoms/Meta/leta.types';
import { NavigationType } from '../organisms/Navigation/navigation.types';
import { FooterType } from '../organisms/Footer/footer.types';

export interface ArchivePageTemplateProps {
    meta: MetaType;
    navigation: NavigationType;
    footer: FooterType;
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
                <Grid pages={pages} />
            </m.div>
        </LazyMotion>
        <Footer {...footer} />
    </Fragment>
);

export default ArchivePageTemplate;
