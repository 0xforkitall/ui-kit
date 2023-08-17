import '../../ui-kit-nextjs/styles.scss';
import '../../ui-kit/styles.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        options: {
            storySort: {
                order: ['Docs', 'Design System', 'UI Kit', 'UI Kit NextJs'],
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex' }}>
                <Story />
            </div>
        ),
    ],
};

export default preview;
