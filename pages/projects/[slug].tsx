import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

// Components
import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate';

// Types
import { ComponentResolverProps } from '../../components/atoms/ComponentResolver/component-resolver.types';
import { MetaProps } from '../../components/atoms/Meta/meta.types';
import { NavigationProps } from '../../components/organisms/Navigation/navigation.types';
import { FooterProps } from '../../components/organisms/Footer/footer.types';
import { PreviousAndNextArticleProps } from '../../components/organisms/PreviousAndNextArticle/previous-and-next-article.types';

export interface ProjectPageProps {
    pageData: {
        meta: MetaProps;
        archiveMedia: Partial<PreviousAndNextArticleProps>;
        contentBlocks: ComponentResolverProps[];
        publishDate: string;
    };
    globalData: {
        navigation: NavigationProps;
        footer: FooterProps;
    };
}

// Utils
import { client, getContentData } from '../../contentful';

const ProjectPage: React.FC<ProjectPageProps> = ({
    pageData: { meta = {}, archiveMedia = {}, contentBlocks = [], publishDate = '', } = {},
    globalData: { navigation = {}, footer = {} } = {},
}) => (
    <PortfolioPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
        footer={footer}
        currentArticleData={archiveMedia}
        currentArticlePublishDate={publishDate}
    />
);

export const getStaticPaths: GetStaticPaths = async () => {
    const projectPages: any = await client
        .getEntries({
            content_type: 'portfolioItem',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items)
        .catch((err: string) => console.error(err));

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
    const globalSettings = await client
        .getEntries({
            content_type: 'globalSettings',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    const pageData: any = await client
        .getEntries({
            content_type: 'portfolioItem',
            limit: 1,
            include: 10,
            'fields.slug[in]': params?.slug,
        })
        .then(({ items: [data = {}] = [] }) => {
            const {
                slug = '',
                meta = {},
                archiveMedia = {},
                publishDate = '',
                contentBlocks = [],
            } = getContentData(data);

            return {
                slug,
                meta,
                archiveMedia,
                publishDate,
                contentBlocks,
            };
        })
        .catch(err => console.error(err));

    return {
        props: {
            globalData: getContentData(globalSettings),
            pageData: pageData
        },
    };
};

export default ProjectPage;
