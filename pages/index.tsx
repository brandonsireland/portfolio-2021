import React from 'react';
import { GetStaticProps } from 'next';

// Components
import DefaultPageTemplate from '../components/templates/DefaultPageTemplate';

// Types
import { ComponentResolverProps } from '../components/atoms/ComponentResolver/component-resolver.types';
import { MetaProps } from '../components/atoms/Meta/meta.types';

// Utils
import { client, getContentData } from '../contentful';

export interface IndexPageProps {
    pageData: {
        meta: MetaProps;
        contentBlocks: ComponentResolverProps[];
        navigation: any;
        footer: any;
    };
}

const IndexPage: React.FC<IndexPageProps> = ({
    pageData: {
        meta = {},
        navigation = {},
        contentBlocks = [],
        footer = {},
    } = {},
}) => (
    <DefaultPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
        footer={footer}
    />
);

export const getStaticProps: GetStaticProps = async () => {
    const indexPageData = await client
        .getEntries({
            content_type: 'page',
            'sys.id': '7HCUxk1hirnnXBs7ksEakU',
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
