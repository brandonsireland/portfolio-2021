import React, { useContext } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import ReactModal from 'react-modal';

// Components
import Icon from '../../atoms/Icon';
import ResponsiveMedia from '../ResponsiveMedia';
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

// query='?w=900&q=70&fit=thumb'

const modalQuery = {
    w1024up: {
        maxWidthQuery: '&w=900',
        fit: '&fit=thumb',
        quality: '?q=78',
    },
    w1023: {
        maxWidthQuery: '&w=900',
        fit: '&fit=thumb',
        quality: '?q=78',
    },
    w767: {
        maxWidthQuery: '&w=900',
        fit: '&fit=thumb',
        quality: '?q=78',
    },
};

const MasonryModal: React.FC<MasonryModalProps> = ({ asset = {} }) => {
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
                <m.div className={css.inner}>
                    <button
                        className={css.close}
                        onClick={() => setModal({ displayModal: false })}
                    >
                        <Icon icon={IconType['Close']} alt='Close Icon' />
                    </button>
                    <div>
                        {asset && asset?.poster ? (
                            <BaseVideo
                                autoPlay={false}
                                controls
                                muted
                                url={asset.default?.url}
                                poster={asset.poster.url}
                            />
                        ) : (
                            <ResponsiveMedia
                                srcset={asset}
                                queries={modalQuery}
                            />
                        )}
                    </div>
                </m.div>
            </LazyMotion>
        </ReactModal>
    );
};

export default MasonryModal;
