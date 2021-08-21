import React, { Fragment } from 'react';

// Components
import Meta from '../atoms/Meta';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import Grid from '../organisms/Grid';

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
    pages = [],
}) => (
    <Fragment>
        <Meta {...meta} />
        <Cursor />
        <Navigation {...navigation} isFixed={false} />
        <Grid pages={pages} />
        <Footer {...footer} />
    </Fragment>
);
 
export default ArchivePageTemplate;