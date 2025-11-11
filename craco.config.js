const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Aumenta a memória do ForkTsCheckerWebpackPlugin para 8 GB
      const forkTsCheckerPluginIndex = webpackConfig.plugins.findIndex(
        (plugin) =>
          plugin.constructor &&
          plugin.constructor.name === "ForkTsCheckerWebpackPlugin"
      );

      if (forkTsCheckerPluginIndex !== -1) {
        webpackConfig.plugins[forkTsCheckerPluginIndex].options.memoryLimit =
          8192; // 8GB
        webpackConfig.plugins[forkTsCheckerPluginIndex].options.async = false; // garante erros imediatos
      }

      return webpackConfig;
    },
  },
  eslint: {
    enable: true, // mantém ESLint ativo
    mode: "extends", // evita problemas de performance
  },
};
