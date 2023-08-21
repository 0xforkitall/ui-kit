import { ColorTheme, useColorTheme } from '@0xforkitall/ui-kit';
import '@0xforkitall/ui-kit-nextjs/styles.scss';
import '@0xforkitall/ui-kit/styles.scss';
import { DocsContainer, DocsPage } from '@storybook/addon-docs';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import './styles.css';
import { themeDark, themeLight } from './themes';

const useTheme = () => {
    const darkMode = useDarkMode();
    const { updateTheme } = useColorTheme();

    useEffect(() => {
        updateTheme(darkMode ? ColorTheme.DARK : ColorTheme.LIGHT);
    }, [updateTheme, darkMode]);

    return darkMode;
};

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
        docs: {
            container: ({ children, context }) => {
                return <DocsContainer context={context}>{children}</DocsContainer>;
            },
            page: DocsPage,
        },
        darkMode: {
            dark: themeDark,
            light: themeLight,
        },
    },
    decorators: [
        (Story) => {
            useTheme();

            return (
                <div style={{ display: 'flex' }}>
                    <Story />
                </div>
            );
        },
    ],
};

export default preview;
