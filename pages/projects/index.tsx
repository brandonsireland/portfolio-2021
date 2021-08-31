import React from 'react';
import { GetStaticProps } from 'next';

// Components
import ArchivePageTemplate from '../../components/templates/ArchivePageTemplate';

// Types
import { NavigationType } from '../../components/organisms/Navigation/navigation.types';
import { FooterProps } from '../../components/organisms/Footer/footer.types';

export interface ProjectPageProps {
    pageMeta: MetaProps;
    pagesData: any[];
    globalData: {
        navigation: NavigationType;
        footer: FooterProps;
    };
}

// Utils
import { client, getContentData } from '../../contentful';
import { MetaProps } from '../../components/atoms/Meta/meta.types';

const ProjectPage: React.FC<ProjectPageProps> = ({
    pageMeta = {},
    pagesData = [],
    globalData: { navigation = {}, footer = {} } = {},
}) => (
    <ArchivePageTemplate
        meta={pageMeta}
        navigation={navigation}
        footer={footer}
        pages={pagesData}
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
    
    const pageMeta = await client
        .getEntries({
            content_type: 'page',
            limit: 1,
            include: 10,
            'sys.id': '3VksFByn968fG9kpxNFlj9'
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));

    const ProjectPagesData = await client
        .getEntries({
            content_type: 'portfolioItem',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => {
            return items.map(item => {
                return getContentData(item)
            })
        })
        .catch((err: string) => console.error(err));
    
        const { meta } = getContentData(pageMeta);

    return {
        props: {
            globalData: getContentData(globalSettings),
            pagesData: ProjectPagesData,
            pageMeta: meta,
        },
    };
};

export default ProjectPage;
