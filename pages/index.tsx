import React from 'react';
import { GetStaticProps } from 'next';

// Components
import DefaultPageTemplate from '../components/templates/DefaultPageTemplate';

// Types
import { ComponentResolverProps } from '../components/atoms/ComponentResolver/lomponent-resolver.types';
import { MetaType } from '../components/atoms/Meta/leta.types';
import { NavigationType } from '../components/organisms/Navigation/navigation.types';
import { FooterType } from '../components/organisms/Footer/footer.types';

export interface IndexPageProps {
    globalData: {
        navigation: NavigationType;
        footer: FooterType;
    };
    pageData: {
        meta: MetaType;
        contentBlocks: ComponentResolverProps[];
    };
    isFirstMount: boolean;
}

// Utils
import { client, getContentData } from '../contentful';

const IndexPage: React.FC<IndexPageProps> = ({
    pageData: { meta = {}, contentBlocks = [] } = {},
    globalData: { navigation = {}, footer = {} } = {},
    isFirstMount = false,
}) => (
    <DefaultPageTemplate
        isFirstMount={isFirstMount}
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
        footer={footer}
    />
);

export const getStaticProps: GetStaticProps = async () => {
    const globalSettings = await client
        .getEntries({
            content_type: 'globalSettings',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

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
            globalData: getContentData(globalSettings),
            pageData: getContentData(indexPageData),
        },
    };
};

export default IndexPage;
