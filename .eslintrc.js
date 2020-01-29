const path = require("path");

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier"],
  plugins: ["react"],
  settings: {
    "import/resolver": {
      node: { paths: [path.resolve("./src")] }
    }
  },
  rules: {
    semi: [
      "off",
      "never",
      {
        omitLastInOneLineBlock: true
      }
    ],
    "arrow-body-style": [0],
    "class-methods-use-this": [0, { exceptMethods: [] }],
    "jsx-a11y/anchor-is-valid": [0],
    "jsx-a11y/media-has-caption": [0],
    "jsx-quotes": [0],
    "max-len": [0],
    "no-alert": [0],
    "no-console": [0],
    "no-plusplus": [0],
    "no-underscore-dangle": [0],
    "no-unused-vars": ["error", { argsIgnorePattern: "[rR]eplace" }],
    "prefer-destructuring": [0],
    "prefer-template": [0],
    "quote-props": [0],
    "react/destructuring-assignment": [0],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": [0],
    "react/no-unescaped-entities": [0],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [0], // temp,
    "linebreak-style": [0],
    "arrow-parens": "off",
    "jsx-a11y/anchor-has-content": [0]
  },
  env: {
    browser: true,
    node: true
  }
};
