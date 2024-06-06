import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          {
            test: /\.(css|scss)$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  modules: {
                    auto: true,
                    localIdentName: "[name]__[local]--[hash:base64:5]",
                  },
                },
              },
              {
                loader: "sass-loader",
                options: {
                  implementation: require.resolve("sass"),
                },
              },
            ],
          },
        ],
      },
    },
  ],
  webpackFinal(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        assets: path.resolve(__dirname, "../assets/"),
        src: path.resolve(__dirname, "../src/"),
        components: path.resolve(__dirname, "../src/components/"),
        context: path.resolve(__dirname, "../src/context/"),
        hooks: path.resolve(__dirname, "../src/hooks/"),
        router: path.resolve(__dirname, "../src/router/"),
        svg: path.resolve(__dirname, "../src/svg/"),
        types: path.resolve(__dirname, "../src/types/"),
        utils: path.resolve(__dirname, "../src/utils/"),
        database: path.resolve(__dirname, "../database/"),
      },
    };
    return config;
  },
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: { useSWC: true },
    },
  },
  swc: () => {
    return {
      jsc: {
        transform: {
          react: {
            runtime: "automatic",
          },
        },
      },
    };
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
