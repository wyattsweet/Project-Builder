#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const configFile = path.join(__dirname, '../src/webpack.config.js');

shell.ln('-s', configFile, `${currentDir}/webpack.config.js`);
shell.exec(`echo linked webpack config`);
