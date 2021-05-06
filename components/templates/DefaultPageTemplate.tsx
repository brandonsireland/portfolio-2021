import React from 'react';

// Components
import LayoutTemplate from './LayoutTemplate';
import ComponentResolver from '../organisms/ComponentResolver';

export interface DefaultPageTemplateProps {
    contentBlocks: any;
}
 
const DefaultPageTemplate: React.FC<DefaultPageTemplateProps> = ({ contentBlocks = [] }) => {
    return ( 
        <LayoutTemplate>
            <ComponentResolver contentBlocks={contentBlocks} />
        </LayoutTemplate>
     );
}
 
export default DefaultPageTemplate;