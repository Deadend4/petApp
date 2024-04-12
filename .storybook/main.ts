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
    // "@storybook/addon-styling-webpack",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        rules: [
          // Replaces any existing Sass rules with given rules
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
    // {
    //   name: `@storybook/preset-scss`,
    //   options: {
    //     // rule: {
    //     //   test: /\.module\.s[ca]ss$/,
    //     // },
    //     cssLoaderOptions: {
    //       modules: true,
    //       localIdentName: "[name]__[local]--[hash:base64:5]",
    //     },
    //     sassLoaderOptions: {
    //       modules: true,
    //       localIdentName: "[name]__[local]--[hash:base64:5]",
    //     },
    //   },
    // },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // webpackFinal: async (config, { configType }) => {
  //   // get index of css rule
  //   const ruleCssIndex = config.module.rules.findIndex((rule) => {
  //     console.log(rule.test);
  //     return (
  //       new RegExp(rule.test).toString() === new RegExp(/\.s[ca]ss$/).toString()
  //     );
  //   });

  //   // map over the 'use' array of the css rule and set the 'module' option to true
  //   config.module.rules[ruleCssIndex].use.map((item) => {
  //     if (item.loader && item.loader.includes("/css-loader/")) {
  //       item.options.modules = {
  //         mode: "local",
  //         localIdentName:
  //           configType === "PRODUCTION"
  //             ? "[local]__[hash:base64:5]"
  //             : "[name]__[local]__[hash:base64:5]",
  //       };
  //     }

  //     return item;
  //   });

  //   return config;
  // },
};
export default config;
