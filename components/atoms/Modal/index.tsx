import React from 'react';

// Context
import { ModalConsumer } from '../../../context/ModalContext';

const Modal: React.FC = () => (
    <ModalConsumer>
        {({ modal: { component: Component, props } }) => {
            return Component ? <Component {...props} /> : null;
        }}
    </ModalConsumer>
);

export default Modal;
