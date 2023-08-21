import { Layout } from '@0xforkitall/ui-kit';
import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta: Meta<typeof Link> = {
    title: 'UI Kit NextJs/Components/Link',
    component: Link,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Link>;

/**
 * Default usage example of the <Breadcrumbs /> component.
 */
export const Default: Story = {
    args: {
        children: 'Default',
        href: 'https://google.com',
    },
};

/**
 * Use the `size` property to customise the size of the Link component.
 */
export const Sizes: Story = {
    render: (args) => {
        return (
            <Layout direction="column" gap="100">
                <Link {...args} size="h1">
                    Size H1
                </Link>
                <Link {...args} size="h2">
                    Size H2
                </Link>
                <Link {...args} size="h3">
                    Size H3
                </Link>
                <Link {...args} size="h4">
                    Size H4
                </Link>
                <Link {...args} size="h5">
                    Size H5
                </Link>
                <Link {...args} size="xl">
                    Size XL
                </Link>
                <Link {...args} size="l">
                    Size L
                </Link>
                <Link {...args} size="m">
                    Size M
                </Link>
                <Link {...args} size="s">
                    Size S
                </Link>
            </Layout>
        );
    },
};

/**
 * Use the `color` property to customise the color of the Link component.
 */
export const Colors: Story = {
    render: (args) => {
        const style = ':root { --0xf-color-body-background-color: var(--0xf-color-gray-800); }';

        return (
            <Layout direction="column" gap="100">
                <style>{style}</style>
                <Link {...args} color="black">
                    Color Black
                </Link>
                <Link {...args} color="error">
                    Color Error
                </Link>
                <Link {...args} color="muted">
                    Color Muted
                </Link>
                <Link {...args} color="primary">
                    Color Primary
                </Link>
                <Link {...args} color="success">
                    Color Success
                </Link>
                <Link {...args} color="warning">
                    Color Warning
                </Link>
                <Link {...args} color="white">
                    Color White
                </Link>
            </Layout>
        );
    },
};

/**
 * Use the `variant` property to customise the visual style of the Link component.
 */
export const Variants: Story = {
    render: (args) => {
        return (
            <Layout direction="row" gap="100">
                <Link {...args} variant="default">
                    Default
                </Link>
                <Link {...args} variant="hover-underline">
                    Hover underline
                </Link>
                <Link {...args} variant="underline">
                    Underline
                </Link>
            </Layout>
        );
    },
};

/**
 * Set the `disabled` property to true to render a Link as disabled.
 */
export const Disabled: Story = {
    args: {
        children: 'Disabled',
        disabled: true,
    },
};

/**
 * Set the `truncate` property to true to truncate long links that do not fit within the parent component's width.
 */
export const Truncate: Story = {
    render: (args) => {
        return (
            <Layout style={{ maxWidth: 200 }}>
                <Link {...args} truncate={true}>
                    Truncate long links when it does not fit the parent component
                </Link>
            </Layout>
        );
    },
};

export default meta;
