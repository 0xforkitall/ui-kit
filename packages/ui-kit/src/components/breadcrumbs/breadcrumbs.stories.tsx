import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
    title: 'UI Kit/Components/Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Breadcrumbs>;

/**
 * Default usage example of the Breadcrumbs component.
 */
export const Default: Story = {
    args: {
        routes: [
            { url: '/first-path', label: 'First path' },
            { url: '/second-path', label: 'Second path' },
            { url: '/third-path', label: 'Third path' },
        ],
    },
};

/**
 * Use the `Link` property to define the appearance and behaviour of each link.
 */
export const CustomLink: Story = {
    args: {
        routes: [
            { url: '/custom-link', label: 'Custom link' },
            { url: '/another-link', label: 'Another link' },
        ],
        Link: ({ children, ...props }) => (
            <a {...props} style={{ color: 'var(--0xf-color-primary-500)' }}>
                {children}
            </a>
        ),
    },
};

export default meta;
