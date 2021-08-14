import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Types
import { MetaProps } from './meta.types';

const Meta: React.FC<MetaProps> = ({
    title, description, metaImage, keywords
}) => {
    const {
        route,
        query,
    } = useRouter();

    const path = Object.keys(query).reduce((acc, cur) => {
        return acc.replace(`[${cur}]`, `${query[cur]}`);
    }, route);

    return (
        <Head>
            <meta
                property='og:url'
                content={`${process.env.NEXT_PUBLIC_SITE_URL}${path}`}
            />

            {title && (
                <>
                    <title>{title}</title>
                    <meta name='og:title' content={title} />
                    <meta name='twitter:title' content={title} />
                </>
            )}

            {description && (
                <>
                    <meta name='description' content={description} />
                    <meta name='og:description' content={description} />
                    <meta name='twitter:description' content={description} />
                </>
            )}

            {metaImage && (
                <>
                    <meta name='og:image' content={metaImage.url} />
                    <meta name='twitter:card' content='summary_large_image' />
                    <meta
                        name='twitter:image'
                        content={`${metaImage.url}?w=300&h=157`}
                    />
                </>
            )}

            <meta name='twitter:card' content='summary_large_image' />

            {keywords && <meta name='keywords' content={keywords} />}
        </Head>
    );
};

export default Meta;
