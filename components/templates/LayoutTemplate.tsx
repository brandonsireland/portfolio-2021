import React, { Fragment } from 'react';

// Components
import Navigation from '../organisms/Navigation';
 
const LayoutTemplate: React.FC = ({ children }) => {
    return ( 
        <Fragment>
            <Navigation />
             { children }
        </Fragment>
     );
}
 
export default LayoutTemplate;