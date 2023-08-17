import { dirname, join } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../../**/*.stories.@(js|jsx|mjs|ts|tsx)', '../../ui-kit/**/*.mdx', '../doc/*.mdx'],
    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-essentials'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@storybook/addon-interactions'),
        {
            name: getAbsolutePath('@storybook/addon-styling'),
            options: {
                sass: { implementation: require('sass') },
            },
        },
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-webpack5'),
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: (webpackConfig) => {
        // Custom image rule to exclude `.svg` files since we handle those with `@svgr/webpack`.
        const imageRule = webpackConfig.module.rules.find((rule) => {
            if (typeof rule !== 'string' && rule.test instanceof RegExp) {
                return rule.test.test('.svg');
            }
        });

        if (typeof imageRule !== 'string') {
            imageRule.exclude = /\.svg$/;
        }

        webpackConfig.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return webpackConfig;
    },
};
export default config;
