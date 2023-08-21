import type { Meta, StoryObj } from '@storybook/react';
import { IconType } from '../icon';
import { Layout } from '../layout';
import { Button } from './button';

const meta: Meta<typeof Button> = {
    title: 'UI Kit/Components/Button',
    component: Button,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

/**
 * Default usage example of the Button component.
 */
export const Default: Story = {
    args: {
        children: 'Default',
        onClick: () => alert('click'),
    },
};

/**
 * Use the `variant` property to customise the visual style of the Button component.
 */
export const Variants: Story = {
    render: (args) => {
        const style = ':root { --0xf-color-body-background-color: var(--0xf-color-gray-500); }';

        return (
            <Layout direction="row" gap="100">
                <style>{style}</style>
                <Button {...args} variant="primary">
                    Primary
                </Button>
                <Button {...args} variant="outline">
                    Outline
                </Button>
                <Button {...args} variant="neutral-black">
                    Neutral black
                </Button>
                <Button {...args} variant="neutral-white">
                    Neutral white
                </Button>
            </Layout>
        );
    },
};

/**
 * Use the `icon` property to display an icon inside the Button component.
 */
export const Icon: Story = {
    args: {
        children: 'Button with icon',
        icon: IconType.ARROW_RIGHT,
    },
};

export default meta;
