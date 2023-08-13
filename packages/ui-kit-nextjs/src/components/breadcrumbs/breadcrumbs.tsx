'use client';

import { Breadcrumbs as BreadcrumbsBase, routerUtils } from '@0xforkitall/ui-kit';
import { BreadcrumbJsonLd } from 'next-seo';
import { Link } from '../link';
import type { IBreadcrumbsProps } from './breadcrumbs.api';

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ routes, ...props }) => {
    const breadcrumbElements = routes.map(({ label, url, urlParams }, index) => ({
        position: index + 1,
        name: label,
        item: routerUtils.generatePath(url, urlParams, { absoluteUrl: true }),
    }));

    return (
        <>
            <BreadcrumbsBase routes={routes} Link={Link} {...props} />
            <BreadcrumbJsonLd useAppDir={true} itemListElements={breadcrumbElements} />
        </>
    );
};
