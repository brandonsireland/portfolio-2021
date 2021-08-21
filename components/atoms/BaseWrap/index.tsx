import React from 'react';

// Styles
import css from './base-wrap.module.scss';

const BaseWrap: React.FC = ({ children }) => {
    return <section className={css.wrap}>{children}</section>;
};

export default BaseWrap;
