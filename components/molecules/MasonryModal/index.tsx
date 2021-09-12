import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import Icon from '../../atoms/Icon';
import ResponsiveMedia from '../ResponsiveMedia';
import BaseVideo from '../../atoms/BaseVideo';

// Context
import { ModalConsumer } from '../../../context/ModalContext';

// Types
import { IconType } from '../../atoms/Icon/icon.enums';

// Styles
import css from './masonry-modal.module.scss';

const backdropVariants = {
    hidden: { opacity: 0, transition: { duration: 1 } },
    visible: { opacity: 1 },
    exit: { opacity: 1 },
};

const modalVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        opacity: 1,
    },
};

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

const MasonryModal = () => {
    return (
        <ModalConsumer>
            {({ modal: { props, displayModal }, setModal }) => (
                <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() =>
                        setModal({
                            props: { asset: props.asset },
                            displayModal: false,
                        })
                    }
                >
                    {displayModal && (
                        <motion.div
                            variants={backdropVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            className={css.backdrop}
                            onClick={() => {
                                setModal({
                                    props: { asset: props.asset },
                                    displayModal: false,
                                })
                            }}
                        >
                            <motion.div
                                layoutId={props?.asset?.id}
                                variants={modalVariants}
                                className={css.modal}
                                onClick={(e) => {
                                    e.persist(); 
                                    e.nativeEvent.stopImmediatePropagation();
                                    e.stopPropagation();
                                }}
                            >
                                <button
                                    className={css.close}
                                    onClick={() =>
                                        setModal({
                                            props: { asset: props.asset },
                                            displayModal: false,
                                        })
                                    }
                                >
                                    <Icon
                                        icon={IconType['Close']}
                                        alt='Close Icon'
                                    />
                                </button>
                                <div>
                                    {props.asset && props?.asset?.poster ? (
                                        <BaseVideo
                                            autoPlay={false}
                                            controls
                                            muted
                                            url={props?.asset.default?.url}
                                            poster={props?.asset.poster.url}
                                        />
                                    ) : (
                                        <ResponsiveMedia
                                            srcset={props?.asset}
                                            queries={modalQuery}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </ModalConsumer>
    );
};

export default MasonryModal;
