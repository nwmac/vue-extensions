const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
  
const deps = require("./package.json").dependencies;

module.exports = {
  css: {
    extract: true
  },
  configureWebpack: config => {
    const mfp = new ModuleFederationPlugin({
        name: 'vlib',
        filename: "vlib-remote.js",
        exposes: {
          "Extension": "./src/lib.js"
        },
        shared: {
          ...deps
        }
      });

    config.plugins.push(mfp);
  }
};