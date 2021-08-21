import React from "react";

// Components
import BaseLink from "../../atoms/BaseLink";
import Icon from "../../atoms/Icon";

// Types
import { CategoryProps } from './category.types';

// Styles
import css from './category.module.scss';

const Category: React.FC<CategoryProps> = ({ href, value }) => (
    <BaseLink href={href}>
        <Icon
            icon={value}
            alt={value}
            className={css.icon}
        />
    </BaseLink>
);
 
export default Category;