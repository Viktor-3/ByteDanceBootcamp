#!/usr/bin/env node
const program = require('commander')
// Strategy mode
program.version(require('../package').version)
program.command('init <name>')
  .description('init project')
  .action(require('../lib/init'))
program.parse(process.argv)
