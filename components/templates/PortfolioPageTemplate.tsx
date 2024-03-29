import React from 'react';
import dynamic from 'next/dynamic';
import { LazyMotion, domAnimation, m, AnimateSharedLayout } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import ComponentResolver from '../atoms/ComponentResolver';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';

const MasonryModal = dynamic(() => import('../molecules/MasonryModal'));
const PreviousAndNextArticle = dynamic(
    () => import('../organisms/PreviousAndNextArticle'),
);
const Footer = dynamic(() => import('../organisms/Footer'));

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';
import { NavigationProps } from '../organisms/Navigation/navigation.types';
import { FooterProps } from '../organisms/Footer/footer.types';
import { PreviousAndNextArticleProps } from '../organisms/PreviousAndNextArticle/previous-and-next-article.types';

export interface PortfolioPageTemplateProps {
    meta: MetaProps;
    navigation: NavigationProps;
    contentBlocks: ComponentResolverProps[];
    footer: FooterProps;
    currentArticleData: PreviousAndNextArticleProps;
    currentArticlePublishDate: string;
}

const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks,
    footer = {},
    currentArticleData,
    currentArticlePublishDate
}) => (
    <AnimateSharedLayout>
        <Meta {...meta} />
        <MasonryModal />
        <Cursor />
        <Navigation {...navigation} isFixed />
        <LazyMotion features={domAnimation}>
            <m.div exit={{ opacity: 0 }}>
                {contentBlocks &&
                    contentBlocks.map(({ id, contentTypeId, ...data }) => (
                        <ComponentResolver
                            key={id}
                            id={id}
                            contentTypeId={contentTypeId}
                            data={data}
                        />
                    ))}
                <PreviousAndNextArticle currentArticleData={currentArticleData} currentArticlePublishDate={currentArticlePublishDate} />
            </m.div>
        </LazyMotion>
        <Footer {...footer} />
    </AnimateSharedLayout>
);

export default PortfolioPageTemplate;
