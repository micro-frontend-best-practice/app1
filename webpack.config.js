const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "Amin",
    projectName: "app1",
    webpackConfigEnv,
    argv,
  });
  const isStandalone = webpackConfigEnv && webpackConfigEnv.standalone;

  console.log(path.resolve(__dirname, "../api/dist/Amin-api.js"));

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      alias: {
        // Add alias for @Amin/api
        "@Amin/api": isStandalone
          ? path.resolve(__dirname, "../api/src/Amin-api.js") // Local path to the API folder when in standalone mode
          : "@Amin/api", // Use the external API otherwise
      },
      extensions: [".js", ".jsx"], // Add file extensions if needed
    },

    externals: isStandalone
      ? {}
      : {
          "@Amin/api": "@Amin/api", // Only externalize the API in non-standalone mode
        },
  });
};
