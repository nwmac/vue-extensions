const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
  
const deps = require("./package.json").dependencies;

module.exports = {
  configureWebpack: config => {
    const mfp = new ModuleFederationPlugin({
      // name: 'main',
      // filename: "remoteEntry.js",        
      shared: {
        "vue-clock2": {
          singleton: true,
          eager: true
        }
      }
    });
   
    config.plugins.push(mfp);
  }
};