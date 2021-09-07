import React from 'react';
import { GetStaticProps } from 'next';

// Components
import DefaultPageTemplate from '../../components/templates/DefaultPageTemplate';

// Types
import { NavigationProps } from '../../components/organisms/Navigation/navigation.types';
import { MetaProps } from '../../components/atoms/Meta/meta.types';
import { ComponentResolverProps } from '../../components/atoms/ComponentResolver/component-resolver.types';

export interface ProjectPageProps {
    pageData: {
        meta: MetaProps;
        contentBlocks: ComponentResolverProps[];
    };
    globalData: {
        navigation: NavigationProps;
    };
}

// Utils
import { client, getContentData } from '../../contentful';

const ProjectPage: React.FC<ProjectPageProps> = ({
    pageData: { meta = {}, contentBlocks = [] } = {},
    globalData: { navigation = {} } = {},
}) => (
    <DefaultPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
    />
)

export const getStaticProps: GetStaticProps = async () => {
    const globalSettings = await client
        .getEntries({
            content_type: 'globalSettings',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    const pageData = await client
        .getEntries({
            content_type: 'page',
            limit: 1,
            include: 10,
            'sys.id': '3VksFByn968fG9kpxNFlj9',
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));
    
    return {
        props: {
            globalData: getContentData(globalSettings),
            pageData: getContentData(pageData),
        },
    };
};

export default ProjectPage;
