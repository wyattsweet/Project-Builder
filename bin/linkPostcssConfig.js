#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const configFile = path.join(__dirname, '../src/postcss.config.js');

shell.ln('-s', configFile, `${currentDir}/postcss.config.js`);

shell.exec(`echo linked postcss config`);
