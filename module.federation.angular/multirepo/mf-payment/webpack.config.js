const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const shareAll = mf.shareAll;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register( path.join(__dirname, 'tsconfig.json'), [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfPayment",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "mfPayment",
      filename: "remoteEntry.js",
      exposes: {
        './Component': './src/app/app.component.ts',
        './PayModule': './src/app/pay/pay.module.ts',
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      }
    }),
    sharedMappings.getPlugin()
  ],
};
