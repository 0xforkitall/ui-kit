import type { ILinkBaseProps } from '@0xforkitall/ui-kit';
import type { LinkProps as NextLinkProps } from 'next/link';
import type { ReactNode } from 'react';

export interface ILinkProps extends Omit<NextLinkProps, 'href'>, ILinkBaseProps {
    /**
     * Href attribute of the link.
     * @default #
     */
    href?: string;
    /**
     * Children of the component.
     */
    children?: ReactNode;
}
