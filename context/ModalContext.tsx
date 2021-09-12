import React, { createContext, useState, ReactElement, useEffect } from 'react';

export interface ModalInterface {
    displayModal: boolean;
    props: any;
}

export interface ModalState {
    modal: ModalInterface;
    setModal: any;
}

export interface ModalContextProviderProps {
    children: ReactElement;
}

const defaultModal: ModalInterface = {
    displayModal: false,
    props: {},
};

const defaultModalState: ModalState = {
    modal: defaultModal,
    setModal: (): void => {},
};

export const ModalContext = createContext<ModalState>(defaultModalState);

const ModalContextProvider = ({
    children,
}: ModalContextProviderProps): ReactElement => {
    const [modal, setModal] = useState<ModalInterface>(defaultModal);

    useEffect(() => {
        modal.displayModal
            ? document
                  ?.querySelector('body')
                  ?.classList.add('u-overflow-hidden')
            : document
                  ?.querySelector('body')
                  ?.classList.remove('u-overflow-hidden');
    }, [modal]);

    return (
        <ModalContext.Provider value={{ modal, setModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const ModalConsumer = ModalContext.Consumer;

export default ModalContextProvider;
