import Head from 'next/head';

// Types
import { MetaProps } from './Meta.types';

const Meta: React.FC<MetaProps> = ({
    title = '',
    description = '',
    keywords = [],
    twitterImage: {
        url: twitterImageUrl = ''
    } = {},
    openGraphImage: {
        url: openGraphImageUrl = ''
    } = {},
}) => {
    return (
        <Head>
            {/* Place this data between the <head> tags of your website */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name="keywords" content={keywords.map(keyword => keyword).join(', ')}></meta>
            {/* Twitter Card data */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@publisher_handle' />
            <meta name='twitter:title' content={title} />
            <meta
                name='twitter:description'
                content={description}
            />
            <meta name='twitter:creator' content='@brandonsireland' />
            <meta
                name='twitter:image:src'
                content={twitterImageUrl}
            />

            {/* Open Graph data */}
            <meta property='og:title' content={title} />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='http://www.brandonsireland.com/' />
            <meta property='og:image' content={openGraphImageUrl} />
            <meta property='og:description' content={description} />
            <meta property='og:site_name' content={title} />
        </Head>
    );
};

export default Meta;
