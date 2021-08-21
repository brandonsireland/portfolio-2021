import React from 'react';

// Types
import { IconProps } from './icon.types';

// Data
import Icons from './icon.data';

const Icon: React.FC<IconProps> = ({ icon, alt, className}) => (
    <img src={Icons[icon]} alt={alt} className={className} />
)

export default Icon;