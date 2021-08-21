import React from 'react';
import { GetStaticProps } from 'next';

// Components
import ArchivePageTemplate from '../../components/templates/ArchivePageTemplate';

// Types
import { NavigationProps } from '../../components/organisms/Navigation/navigation.types';
import { FooterProps } from '../../components/organisms/Footer/footer.types';

export interface ProjectPageProps {
    pagesData: any[];
    globalData: {
        navigation: NavigationProps;
        footer: FooterProps;
    };
}

// Utils
import { client, getContentData } from '../../contentful';

const ProjectPage: React.FC<ProjectPageProps> = ({
    pagesData = [],
    globalData: { navigation = {}, footer = {} } = {},
}) => (
    <ArchivePageTemplate
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

    return {
        props: {
            globalData: getContentData(globalSettings),
            pagesData: ProjectPagesData,
        },
    };
};

export default ProjectPage;
