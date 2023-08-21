import type { Meta, StoryObj } from '@storybook/react';
import { Layout } from '../layout';
import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
    title: 'UI Kit/Components/Chip',
    component: Chip,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Chip>;

/**
 * Default usage example of the Chip component.
 */
export const Default: Story = {
    args: {
        children: 'Default',
    },
};

/**
 * Use the `size` property to customise the size of the Chip component.
 */
export const Sizes: Story = {
    render: (args) => {
        return (
            <Layout direction="row" gap="100" alignItems="start">
                <Chip {...args} size="l">
                    Size L
                </Chip>
                <Chip {...args} size="m">
                    Size M
                </Chip>
                <Chip {...args} size="s">
                    Size S
                </Chip>
            </Layout>
        );
    },
};

export default meta;
