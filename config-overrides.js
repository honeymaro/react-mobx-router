/* eslint-disable */
const rewireReactHotLoader = require("react-app-rewire-hot-loader-for-customize-cra");

const { addDecoratorsLegacy, override } = require("customize-cra");

module.exports = override(rewireReactHotLoader(), addDecoratorsLegacy());
