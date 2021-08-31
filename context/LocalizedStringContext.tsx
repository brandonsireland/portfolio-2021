import React, { createContext, useState, ReactElement, useEffect } from 'react';

// Utils
import { client, getContentData } from '../contentful';

export interface LocalizedStringsInterface {
    localizedStrings: string[];
}

export interface LocalizedStringsState {
    localizedStrings: LocalizedStringsInterface;
    setLocalizedStrings: any;
}

export interface LocalizedStringsContextProviderProps {
    children: ReactElement;
}

const defaultLocalizedStrings: LocalizedStringsInterface = {
    localizedStrings: [],
};

const defaultLocalizedStringsState: LocalizedStringsState = {
    localizedStrings: defaultLocalizedStrings,
    setLocalizedStrings: (): void => {},
};

export const LocalizedStringsContext = createContext<LocalizedStringsState>(
    defaultLocalizedStringsState,
);

const LocalizedStringsContextProvider = ({
    children,
}: LocalizedStringsContextProviderProps): ReactElement => {
    const [
        localizedStrings,
        setLocalizedStrings,
    ] = useState<LocalizedStringsInterface>(defaultLocalizedStrings);

    useEffect(() => {
        const setAllStrings = async () => {
            const localizedStrings = await client
                .getEntries({
                    content_type: 'localizedString',
                    limit: 500,
                    include: 1,
                })
                .then(
                    ({
                        items: localizedStrings = [],
                    }: {
                        items: Array<any>;
                    }) => {
                        return localizedStrings
                            .map(string => getContentData(string))
                            .reduce(
                                (acc, cur) => ({
                                    ...acc,
                                    [cur.id]: cur.value,
                                }),
                                {},
                            );
                    },
                )
                .catch((err: string) => console.error(err));

            setLocalizedStrings(localizedStrings);
        };

        setAllStrings();
    }, []);

    return (
        <LocalizedStringsContext.Provider
            value={{ localizedStrings, setLocalizedStrings }}
        >
            {children}
        </LocalizedStringsContext.Provider>
    );
};

export const LocalizedStringsConsumer = LocalizedStringsContext.Consumer;

export default LocalizedStringsContextProvider;
