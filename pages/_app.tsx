import React from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';

// Styles
import '../resources/scss/global.scss';

const App: React.FC<AppProps> = ({
    Component,
    pageProps,
}: {
    Component: any;
        pageProps: any;
        router: any;
    }) => {
    
    return <Component {...pageProps} />
};

export const getInitialProps = async ({
    Component,
    ctx,
}: {
    Component: any;
    ctx: NextPageContext;
}) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    
    return { pageProps };
};

export default App;
