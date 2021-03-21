import React, { Fragment } from 'react';

// Components
import Navigation from '../organisms/Navigation';
import Footer from '../organisms/Footer';
import ComponentResolver from '../organisms/ComponentResolver';

export interface LayoutTeplateProps {
    contentBlocks: any;
}
 
const LayoutTemplate: React.FC<LayoutTeplateProps> = ({ contentBlocks = []}) => {
    return ( 
        <Fragment>
            <Navigation />
            <ComponentResolver contentBlocks={contentBlocks} />
            <Footer />
        </Fragment>
     );
}
 
export default LayoutTemplate;