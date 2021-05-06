import React, { Fragment } from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';

// Components
import Cursor from '../components/atoms/Cursor';

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
    
    return (
        <Fragment>
            <Cursor />
            <Component {...pageProps} />
        </Fragment>
    )
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
