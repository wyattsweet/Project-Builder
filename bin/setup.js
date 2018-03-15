#! /usr/bin/env node
const shell = require('shelljs');

shell.exec('yarn init -y');
shell.exec('yarn add react react-dom react-router-dom');

shell.exec(
  'yarn add -D babel-core babel-jest babel-loader babel-preset-env babel-preset-react css-loader enzyme enzyme-adapter-react-16 eslint eslint-config-airbnb eslint-config-prettier eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react identity-obj-proxy jest postcss postcss-cssnext postcss-import postcss-loader style-loader webpack webpack-cli webpack-dev-server'
);
