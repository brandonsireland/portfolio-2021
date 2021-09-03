import React from 'react';
import { GetStaticProps } from 'next';

// Components
import DefaultPageTemplate from '../components/templates/DefaultPageTemplate';

// Types
import { ComponentResolverProps } from '../components/atoms/ComponentResolver/component-resolver.types';
import { MetaProps } from '../components/atoms/Meta/meta.types';
import { NavigationProps } from '../components/organisms/Navigation/navigation.types';

export interface ContactPageProps {
    globalData: {
        navigation: NavigationProps;
    };
    pageData: {
        meta: MetaProps;
        contentBlocks: ComponentResolverProps[];
    };
}

// Utils
import { client, getContentData } from '../contentful';

const ContactPage: React.FC<ContactPageProps> = ({
    pageData: { meta = {}, contentBlocks = [] } = {},
    globalData: { navigation = {} } = {},
}) => (
    <DefaultPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
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

    const contactPageData = await client
        .getEntries({
            content_type: 'page',
            'sys.id': '4hTylz0JNpC6piGQk5DdNP',
            limit: 1,
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    return {
        props: {
            globalData: getContentData(globalSettings),
            pageData: getContentData(contactPageData),
        },
    };
};

export default ContactPage;
