// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// module.exports = {
//   plugins: [
//     // your custom plugins
//   ],
//   module: {
//     rules: [
//       // add your custom rules.
//     ],
//   },
// };

module.exports = (baseConfig, env, defaultConfig) => {
    defaultConfig.module.rules[0].test = /\.m?jsx?$/;
    defaultConfig.resolve.extensions = ['.js', '.jsx', '.mjs'];
    defaultConfig.module.rules[0].query.presets = [ require.resolve('babel-preset-react-app') ]
    defaultConfig.module.rules[0].query.plugins = []

    return defaultConfig
}
