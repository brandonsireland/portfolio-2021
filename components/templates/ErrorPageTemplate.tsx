import React, { Fragment } from 'react';

// Components
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import Error from '../atoms/404';

// Types
import { NavigationType } from '../organisms/Navigation/navigation.types';
import { FooterProps } from '../organisms/Footer/footer.types';

export interface ErrorPageTemplateProps {
    navigation: NavigationType;
    footer: FooterProps;
}

const ErrorPageTemplate: React.FC<ErrorPageTemplateProps> = ({
    navigation = {},
    footer,
}) => (
    <Fragment>
        <Cursor />
        <Navigation navigation={navigation} isFixed/>
        <Error />
        <Footer {...footer} />
    </Fragment>
);

export default ErrorPageTemplate;
