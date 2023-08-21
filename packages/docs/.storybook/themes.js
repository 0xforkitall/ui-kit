import { themes } from '@storybook/theming';

/** @type {import('@storybook/theming').ThemeVars} */
const customTheme = {
    brandTitle: '0xforkitall',
    brandUrl: 'https://0xforkitall.com',
    brandTarget: '_blank',
};

export const themeDark = { ...themes.dark, ...customTheme };
export const themeLight = { ...themes.light, ...customTheme };
