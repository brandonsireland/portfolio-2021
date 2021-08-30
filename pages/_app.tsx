import React from 'react';
import { NextPageContext } from 'next';
import { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

// Context
import ModalContextProvider from '../context/ModalContext';
import LocalizedStringsContextProvider from '../context/LocalizedStringContext';

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
    const [isFirstMount, setIsFirstMount] = React.useState(true);
    const router = useRouter();

    React.useEffect(() => {
        const handleRouteChange = () => {
            isFirstMount && setIsFirstMount(false);
        };

        router.events.on('routeChangeStart', handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        };
    }, []);
    return (
        <LocalizedStringsContextProvider>
            <ModalContextProvider>
                <AnimatePresence exitBeforeEnter>
                    <Component
                        isFirstMount={isFirstMount}
                        key={router.route}
                        {...pageProps} />
                </AnimatePresence>
            </ModalContextProvider>
        </LocalizedStringsContextProvider>
    );
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
