import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

// Components
import PortfolioPageTemplate from '../../components/templates/PortfolioPageTemplate';

// Types
import { ComponentResolverProps } from '../../components/atoms/ComponentResolver/component-resolver.types';
import { MetaType } from '../../components/atoms/Meta/meta.types';
import { BasePictureProps } from '../../components/atoms/BasePicture/base-picture.types';
import { NavigationType } from '../../components/organisms/Navigation/navigation.types';
import { FooterType } from '../../components/organisms/Footer/footer.types';
import { PreviousAndNextArticleProps } from '../../components/organisms/PreviousAndNextArticle/previous-and-next-article.types';

export interface ProjectPageProps {
    pageData?: {
        meta: MetaType;
        backgroundImage: BasePictureProps;
        contentBlocks: ComponentResolverProps[];
    };
    globalData: {
        navigation: NavigationType;
        footer: FooterType;
    };
    articleData: {
        nextPortfolioData: Partial<PreviousAndNextArticleProps>;
        previousPortfolioData: Partial<PreviousAndNextArticleProps>;
    };
}

// Utils
import { client, getContentData } from '../../contentful';

const ProjectPage: React.FC<ProjectPageProps> = ({
    pageData: { meta = {}, backgroundImage = {}, contentBlocks = [] } = {},
    globalData: { navigation = {}, footer = {} } = {},
    articleData: { nextPortfolioData = {}, previousPortfolioData = {} } = {},
}) => (
    <PortfolioPageTemplate
        meta={meta}
        navigation={navigation}
        contentBlocks={contentBlocks}
        footer={footer}
        nextArticleData={nextPortfolioData}
        currentArticleData={backgroundImage}
        previousArticleData={previousPortfolioData}
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
                backgroundImage = {},
                publishDate = '',
                contentBlocks = [],
            } = getContentData(data);

            return {
                slug,
                meta,
                backgroundImage,
                publishDate,
                contentBlocks,
            };
        })
        .catch(err => console.error(err));

    const nextPortfolioData: any = await client
        .getEntries({
            content_type: 'portfolioItem',
            limit: 1,
            include: 10,
            'fields.publishDate[gt]': pageData?.publishDate,
        })
        .then(({ items: [data = {}] = [] }) => {
            const {
                slug: nextArticleSlug = '',
                title: nextArticleTitle = '',
                backgroundImage: nextArticleBackgroundImage = {},
            } = getContentData(data);

            return {
                nextArticleSlug,
                nextArticleTitle,
                nextArticleBackgroundImage,
            };
        })
        .catch(err => console.error(err));

    const previousPortfolioData: any = await client
        .getEntries({
            content_type: 'portfolioItem',
            limit: 1,
            include: 10,
            'fields.publishDate[lt]': pageData?.publishDate,
        })
        .then(({ items: [data = {}] = [] }) => {
            const {
                slug: previousArticleSlug = '',
                title: previousArticleTitle = '',
                backgroundImage: previousArticleBackgroundImage = {},
            } = getContentData(data);

            return {
                previousArticleSlug,
                previousArticleTitle,
                previousArticleBackgroundImage,
            };
        })
        .catch(err => console.error(err));

    return {
        props: {
            globalData: getContentData(globalSettings),
            pageData: pageData,
            articleData: {
                previousPortfolioData,
                nextPortfolioData,
            },
        },
    };
};

export default ProjectPage;
