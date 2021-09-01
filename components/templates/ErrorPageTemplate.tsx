import React, { Fragment } from 'react';
import dynamic from 'next/dynamic';

// Components
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Error from '../atoms/404';

const Footer = dynamic(() => import('../organisms/Footer'));

// Types
import { NavigationProps } from '../organisms/Navigation/navigation.types';
import { FooterProps } from '../organisms/Footer/footer.types';

export interface ErrorPageTemplateProps {
    navigation?: NavigationProps;
    footer: FooterProps;
}

const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
    navigation = {},
    footer = {},
}) => (
    <Fragment>
        <Cursor />
        <Navigation {...navigation} isFixed />
        <Error />
        <Footer {...footer} />
    </Fragment>
);

export default ErrorPageTemplate;
