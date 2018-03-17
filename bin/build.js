#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

shell.exec(`echo Building React project`);
shell.exec(
  'setup && cp-main-html && link-webpack && link-eslintrc && link-babelrc && link-postcss'
);
