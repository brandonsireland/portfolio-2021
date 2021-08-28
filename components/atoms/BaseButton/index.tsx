import React from 'react';

// Styles
import css from './base-button.module.scss';

const BaseButton: React.FC = ({ children }) => <button className={css.button}>{children}</button>;

export default BaseButton;
