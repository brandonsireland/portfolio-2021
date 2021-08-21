import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ReactModal from 'react-modal';

// Components
import Icon from '../../atoms/Icon';

// Context
import { ModalContext } from '../../../context/ModalContext';

// Types
import { GridModalProps } from './grid-modal.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Styles
import css from './grid-modal.module.scss';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#__next');

const GridModal: React.FC<GridModalProps> = ({
    image: { id = '', url = '' },
}) => {
    const {
        modal: { displayModal },
        setModal,
    } = useContext(ModalContext);

    return (
        <ReactModal
            isOpen={displayModal}
            portalClassName={css.gridModalOverlay}
            closeTimeoutMS={500}
            onRequestClose={() => setModal({ displayModal: false })}
        >
            <div className={css.inner}>
                <button
                    className={css.close}
                    onClick={() => setModal({ displayModal: false })}
                >
                    <Icon icon={IconType['Close']} alt='Close Icon' />
                </button>
                <motion.img layoutId={id} className={css.image} src={url} />
            </div>
        </ReactModal>
    );
};

export default GridModal;
