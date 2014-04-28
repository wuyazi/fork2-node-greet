#!/usr/bin/env node
greet = require("../index.js");
var parseArgs = require('minimist');
var argv = parseArgs(process.argv,opts={});
console.log(greet(process.argv[2],argv.drunk));
