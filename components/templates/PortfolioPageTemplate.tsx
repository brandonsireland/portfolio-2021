import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

// Components
import Meta from '../atoms/Meta';
import Modal from '../atoms/Modal';
import ComponentResolver from '../atoms/ComponentResolver';
import Cursor from '../atoms/Cursor';
import Navigation from '../organisms/Navigation';
import PreviousAndNextArticle from '../organisms/PreviousAndNextArticle';
import Footer from '../organisms/Footer';

// Types
import { MetaProps } from '../atoms/Meta/meta.types';
import { ComponentResolverProps } from '../atoms/ComponentResolver/component-resolver.types';

export interface PortfolioPageTemplateProps {
    meta: MetaProps;
    navigation: any;
    contentBlocks: ComponentResolverProps[] | [];
    footer: any;
    nextArticleData: any;
    currentArticleData: any;
    previousArticleData: any;
}

const PortfolioPageTemplate: React.FC<PortfolioPageTemplateProps> = ({
    meta = {},
    navigation = {},
    contentBlocks = [],
    footer = {},
    nextArticleData = {},
    currentArticleData = {},
    previousArticleData = {},
}) => {
    const variants = {
        animate: {
            width: '0',
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            width: '100vw',
            transition: {
                duration: 0.5,
            },
        },
    };
    
    return (
        <Fragment>
            <Meta {...meta} />
            <Modal />
            <Cursor />
            <Navigation {...navigation} isFixed />
            {contentBlocks &&
                contentBlocks.map(({ id, contentTypeId, ...data }) => (
                    <ComponentResolver
                        key={id}
                        id={id}
                        contentTypeId={contentTypeId}
                        data={data}
                    />
                ))}
            <PreviousAndNextArticle
                nextArticleData={nextArticleData}
                currentArticleData={currentArticleData}
                previousArticleData={previousArticleData}
            />
            <Footer {...footer} />
            <motion.div
                variants={variants}
                animate='animate'
                exit='exit'
                style={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    transform: 'translate3d(-50%, -50%, 0)',
                    backgroundColor: '#0b0414',
                    zIndex: 2,
                    height: '100vh',
                    width: '100vw',
                }}
            />
        </Fragment>
    );
};

export default PortfolioPageTemplate;
