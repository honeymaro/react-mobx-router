/* eslint-disable */
const rewireReactHotLoader = require("react-app-rewire-hot-loader-for-customize-cra");

const {
  addDecoratorsLegacy,
  override,
  addBabelPlugins,
} = require("customize-cra");

module.exports = override(
  rewireReactHotLoader(),
  addBabelPlugins("@babel/plugin-proposal-optional-chaining"),
  addDecoratorsLegacy()
);
