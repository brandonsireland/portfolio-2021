import React from 'react';
import { GetStaticProps } from 'next';

import { client, getContentData } from '../contentful';

const IndexPage: React.FC = () => {
    return ( <div>Index Page</div> );
}

export const getStaticProps: GetStaticProps = async () => {
    
    const indexPageData = await client
        .getEntries({
            content_type: 'pageHome',
            limit: 1,
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));


    return {
        props: {
            pageData: getContentData(indexPageData),
        },
    };
};
 
export default IndexPage;