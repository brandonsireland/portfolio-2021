import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

// Components
import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate';

// Types
import { ComponentResolverProps } from '../../components/atoms/ComponentResolver/Component-resolver.types';
import { MetaProps } from '../../components/atoms/Meta/meta.types';

// Utils
import { client, getContentData } from '../../contentful';

export interface ProjectPageProps {
    pageData: {
        meta: MetaProps;
        navigation: any;
        contentBlocks: ComponentResolverProps[];
        footer: any;
    };
}

const ProjectPage: React.FC<ProjectPageProps> = ({
    pageData: {
        meta = {},
        navigation = {},
        contentBlocks = [],
        footer = {},
    } = {},
}) => (
    <PortfolioPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
        footer={footer}
    />
);

export const getStaticPaths: GetStaticPaths = async () => {
    const projectPages: any = await client
        .getEntries({
            content_type: 'page',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items)
        .catch((err: string) => console.error(err));

    // return page paths with slugs that are defined
    // homepage slug is undefined as that is the index page.
    const paths = projectPages
        .map((page: { fields: { slug: any } }) => {
            return {
                params: {
                    slug: page.fields.slug,
                },
            };
        })
        .filter(
            (path: { params: { slug: undefined } }) =>
                path.params.slug !== undefined,
        );

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const pageData = await client
        .getEntries({
            content_type: 'page',
            'fields.slug[in]': params?.slug,
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    return {
        props: {
            pageData: getContentData(pageData),
        },
    };
};

export default ProjectPage;
