#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const configFile = path.join(__dirname, '../src/eslintrc.config.js');

shell.ln('-s', configFile, `${currentDir}/.eslintrc`);
shell.exec(`echo linked eslint config`);
