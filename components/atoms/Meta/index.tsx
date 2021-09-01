import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// Types
import { MetaProps } from './meta.types';

const Meta: React.FC<MetaProps> = ({
    title = '',
    description = '',
    openGraphImage = {},
    twitterImage = {},
    keywords = '',
}) => {
    const { route, query } = useRouter();

    useEffect(() => {
        const pageTitle = title;
        const attentionMessage = 'Come Back!';
        let blinkEvent: any = null;

        const visibility = () => {
            var isPageActive = !document.hidden;

            if (!isPageActive) {
                blink();
            } else {
                document.title = pageTitle;
                clearInterval(blinkEvent);
            }
        };

        const blink = () => {
            blinkEvent = setInterval(function () {
                if (document.title === attentionMessage) {
                    document.title = pageTitle;
                } else {
                    document.title = attentionMessage;
                }
            }, 100);
        };
        document.addEventListener('visibilitychange', visibility);

        return () =>
            document.removeEventListener('visibilitychange', visibility);
    }, []);

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

            {openGraphImage && (
                <>
                    <meta name='og:image' content={openGraphImage.url} />
                    <meta name='twitter:card' content='summary_large_image' />
                </>
            )}

            {twitterImage && (
                <>
                    <meta
                        name='twitter:image'
                        content={`${twitterImage.url}?w=300&h=157`}
                    />
                </>
            )}

            <meta name='twitter:card' content='summary_large_image' />

            {keywords && <meta name='keywords' content={keywords} />}
        </Head>
    );
};

export default Meta;
