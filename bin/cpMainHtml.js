#! /usr/bin/env node

const shell = require('shelljs');
const path = require('path');

const currentDir = shell.pwd();
const configFile = path.join(__dirname, '../src/index.html');

shell.ln('-s', configFile, `${currentDir}/index.html`);
