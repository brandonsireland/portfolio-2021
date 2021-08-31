import React from 'react';
import { GetStaticProps } from 'next';

// Components
import ErrorPageTemplate from '../components/templates/ErrorPageTemplate';

// Types
import { NavigationType } from '../components/organisms/Navigation/navigation.types';
import { FooterType } from '../components/organisms/Footer/footer.types';

export interface ContactPageProps {
    globalData: {
        navigation: NavigationType;
        footer: FooterType;
    };
}

// Utils
import { client, getContentData } from '../contentful';
 
const ErrorPage: React.FC<ContactPageProps> = ({
    globalData: { navigation = {}, footer = {} } = {},
}) => {
    return ( <ErrorPageTemplate navigation={navigation} footer={footer} /> );
}

export const getStaticProps: GetStaticProps = async () => {
    const globalSettings = await client
        .getEntries({
            content_type: 'globalSettings',
            include: 10,
        })
        .then(({ items = [] }: { items: Array<any> }) => items[0])
        .catch((err: string) => console.error(err));


    return {
        props: {
            globalData: getContentData(globalSettings),
        },
    };
};
 
export default ErrorPage;