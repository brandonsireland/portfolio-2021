import React from 'react';

// Components
import MasonryModal from '../../molecules/MasonryModal';

// Context
import { ModalConsumer } from '../../../context/ModalContext';

const components = {
    MasonryModal: MasonryModal,
};

const Modal: React.FC = () => (
    <ModalConsumer>
        {({ modal: { component, props } }) => {
            const Component = components[component];
            return Component ? <Component {...props} /> : null;
        }}
    </ModalConsumer>
);

export default Modal;
