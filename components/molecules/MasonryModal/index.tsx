import React, { useContext } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ReactModal from 'react-modal';

// Components
import Icon from '../../atoms/Icon';
import BasePicture from '../../atoms/BasePicture';
import BaseVideo from '../../atoms/BaseVideo';

// Context
import { ModalContext } from '../../../context/ModalContext';

// Types
import { MasonryModalProps } from './masonry-modal.types';
import { IconType } from '../../atoms/Icon/icon.enums';

// Styles
import css from './masonry-modal.module.scss';

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#__next');

const MasonryModal: React.FC<MasonryModalProps> = ({
    asset: { id = '', contentType = '' },
    asset,
}) => {
    const {
        modal: { displayModal },
        setModal,
    } = useContext(ModalContext);

    return (
        <ReactModal
            isOpen={displayModal}
            portalClassName={css.masonryModalOverlay}
            closeTimeoutMS={500}
            onRequestClose={() => setModal({ displayModal: false })}
        >
            <LazyMotion features={domAnimation}>
                <m.div className={css.inner} layoutId={id}>
                    <button
                        className={css.close}
                        onClick={() => setModal({ displayModal: false })}
                    >
                        <Icon icon={IconType['Close']} alt='Close Icon' />
                    </button>
                    <div>
                        {contentType === 'video/mp4' ? (
                            <BaseVideo
                                autoPlay={false}
                                controls
                                muted
                                url={asset.url}
                            />
                        ) : (
                            <BasePicture
                                image={asset}
                                query='?w=900&q=70&fit=thumb'
                            />
                        )}
                    </div>
                </m.div>
            </LazyMotion>
        </ReactModal>
    );
};

export default MasonryModal;
