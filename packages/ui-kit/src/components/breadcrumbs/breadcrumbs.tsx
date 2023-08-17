import classNames from 'classnames';
import { Layout } from '../layout';
import { Link as LinkComponent } from '../link';
import { Text } from '../text';
import type { IBreadcrumbsProps } from './breadcrumbs.api';

/**
 * The Breadcrumbs component is a React component designed to display a navigational trail in the form of breadcrumbs,
 * aiding user orientation within a website or application.
 */
export const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props) => {
    const { routes, className, Link = LinkComponent } = props;

    return (
        <Layout className={classNames('breadcrumbs', className)} direction="row" gap="50" alignItems="center">
            {routes.map(({ url, label }, index) => (
                <>
                    <Link
                        key={url}
                        href={url}
                        disabled={index === routes.length - 1}
                        variant="hover-underline"
                        truncate={index === routes.length - 1}
                    >
                        {label}
                    </Link>
                    {index < routes.length - 1 && <Text size="m">{'>'}</Text>}
                </>
            ))}
        </Layout>
    );
};
