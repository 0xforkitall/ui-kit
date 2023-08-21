import { linkUtils } from '@0xforkitall/ui-kit';
import { default as LinkNext } from 'next/link';
import React from 'react';
import type { ILinkProps } from './link.api';

/**
 * The Link component is a React element designed for creating hyperlinks with customizable styles and behaviors. It
 * uses the `next/link` package to ensure optimal navigation in NextJs application.
 */
export const Link: React.FC<ILinkProps> = (props) => {
    const { color, size, variant, className, disabled, truncate, children, href = '#', ...otherProps } = props;

    return (
        <LinkNext aria-disabled={disabled} className={linkUtils.buildClassnames(props)} href={href} {...otherProps}>
            {children}
        </LinkNext>
    );
};
