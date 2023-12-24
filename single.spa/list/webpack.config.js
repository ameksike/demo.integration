const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "demo",
    projectName: "list",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            // Translates CSS into CommonJS
            // "css-loader",
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
            // Compiles Postcss to CSS
            "postcss-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  });
};
