#! /usr/bin/env node
const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const common = path.join(__dirname, '../src/webpack.common.js');
const dev = path.join(__dirname, '../src/webpack.dev.js');
const prod = path.join(__dirname, '../src/webpack.prod.js');

shell.ln('-s', common, `${currentDir}/webpack.common.js`);
shell.ln('-s', dev, `${currentDir}/webpack.dev.js`);
shell.ln('-s', prod, `${currentDir}/webpack.prod.js`);
shell.exec(`echo linked webpack configs`);
