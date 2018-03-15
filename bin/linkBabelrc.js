#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const configFile = path.join(__dirname, '../src/babelrc');

shell.ln('-s', configFile, `${currentDir}/babelrc`);
shell.exec(`echo linked babel config`);
