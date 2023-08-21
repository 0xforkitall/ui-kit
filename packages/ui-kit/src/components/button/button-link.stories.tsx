import type { Meta, StoryObj } from '@storybook/react';
import { IconType } from '../icon';
import { Layout } from '../layout';
import { ButtonLink } from './button-link';

const meta: Meta<typeof ButtonLink> = {
    title: 'UI Kit/Components/ButtonLink',
    component: ButtonLink,
    tags: ['autodocs'],
};

type Story = StoryObj<typeof ButtonLink>;

/**
 * Default usage example of the ButtonLink component.
 */
export const Default: Story = {
    args: {
        children: 'Default',
        href: 'https://google.com',
        target: '_blank',
    },
};

/**
 * Use the `variant` property to customise the visual style of the ButtonLink component.
 */
export const Variants: Story = {
    render: (args) => {
        const style = ':root { --0xf-color-body-background-color: var(--0xf-color-gray-500); }';

        return (
            <Layout direction="row" gap="100">
                <style>{style}</style>
                <ButtonLink {...args} variant="primary">
                    Primary
                </ButtonLink>
                <ButtonLink {...args} variant="outline">
                    Outline
                </ButtonLink>
                <ButtonLink {...args} variant="neutral-black">
                    Neutral black
                </ButtonLink>
                <ButtonLink {...args} variant="neutral-white">
                    Neutral white
                </ButtonLink>
            </Layout>
        );
    },
};

/**
 * Use the `icon` property to display an icon inside the ButtonLink component.
 */
export const Icon: Story = {
    args: {
        children: 'Button with icon',
        icon: IconType.ARROW_RIGHT,
    },
};

export default meta;
