const path = require("path");
const webpack = require("webpack");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.stories.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    });

    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
        "postcss-loader",
      ],
    });

    config.resolve.alias = {
      "react-router-dom": path.resolve(__dirname, "linkMock.jsx"),
    };

    return config;
  },
};
