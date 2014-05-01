greet = require("../lib/index.js")
parseArgs = require("minimist")
argv = parseArgs(process.argv, opts = {})
console.log greet(process.argv[2], argv.drunk)
greet = require("../lib/index.js")
module.exports = command