import React from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { AnimateSharedLayout } from 'framer-motion';

// Context
import ModalContextProvider from '../context/ModalContext';

// Styles
import '../resources/scss/global.scss';

const App: React.FC<AppProps> = ({
    Component,
    pageProps,
}: {
    Component: any;
    pageProps: any;
    router: any;
}) => (
    <ModalContextProvider>
        <AnimateSharedLayout>
                <Component {...pageProps} />
        </AnimateSharedLayout>
    </ModalContextProvider>
);

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
