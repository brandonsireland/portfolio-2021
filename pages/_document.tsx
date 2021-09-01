import React from 'react';

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, initial-scale=1, shrink-to-fit=no'
                    />
                    <link
                        rel='icon'
                        type='image/x-icon'
                        href='/images/meta/favicon.ico'
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
