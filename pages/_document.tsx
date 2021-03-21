import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, shrink-to-fit=no'
                    />
                    <meta property='og:type' content='website' />

                    {/* eslint-disable-next-line */}
                    <meta property='og:url' content={process.env.SITE_URL} />

                    <link
                        rel='icon'
                        type='image/png'
                        href='/static/img/meta/favicon.ico'
                        sizes='16x16'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
