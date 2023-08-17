import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
    title: '/ui-kit/Breadcrumbs',
    component: Breadcrumbs,
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
    args: {
        routes: [
            { url: '/first-path', label: 'First path' },
            { url: '/second-path', label: 'Second path' },
        ],
    },
};
