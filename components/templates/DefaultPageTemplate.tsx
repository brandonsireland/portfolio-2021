import React from 'react';

// Components
import Meta from '../atoms/Meta';
import LayoutTemplate from './LayoutTemplate';
import ComponentResolver from '../organisms/ComponentResolver';
import Cursor from '../atoms/Cursor';

export interface DefaultPageTemplateProps {
    contentBlocks: any;
    meta: any;
}
 
const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({ contentBlocks = [], meta = {} }) => {
    return ( 
        <LayoutTemplate>
            <Meta {...meta}  />
            <Cursor />
            <ComponentResolver contentBlocks={contentBlocks} />
        </LayoutTemplate>
     );
}
 
export default DefaultPageTemplate;