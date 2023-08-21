import React from 'react';
import { linkUtils } from './link-utils';
import type { ILinkProps } from './link.api';

/**
 * The Link component is a React element that facilitates the creation of hyperlinks with customizable styles and behaviors.
 */
export const Link: React.FC<ILinkProps> = (props) => {
    const { color, size, variant, className, disabled, truncate, children, ...otherProps } = props;

    return (
        <a aria-disabled={disabled} className={linkUtils.buildClassnames(props)} {...otherProps}>
            {children}
        </a>
    );
};
