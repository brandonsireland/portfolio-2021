import React from 'react';
import { GetStaticProps } from 'next';

import { client, getContentData } from '../../contentful';

// Components
import BeautifyJSON from '../../components/atoms/BeautifyJSON';

export interface ProjectPageProps {
    pageData: any;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ pageData }) => {
    return <BeautifyJSON>{pageData}</BeautifyJSON>;
};

export const getStaticProps: GetStaticProps = async () => {
    const ProjectPageData = await client
        .getEntries({
            content_type: 'portfolioItem',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    return {
        props: {
            pageData: getContentData(ProjectPageData),
        },
    };
};

export default ProjectPage;
