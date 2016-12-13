// --- Hackasaurus Rex --------------------------------------------------------
//
// https://github.com/patrick-steele-idem/app-module-path-node
// https://gist.github.com/branneman/8048520
//
// This adds the node_modules for `gluegun` to the "search path".
//
// So, wherever folks have their scripts (plugins or their apps), they will be
// given a chance to resolve dependencies back up to gluegun's node_modules.
//
// I may be going to hell for this, but I'm taking you bastards with me.
// ----------------------------------------------------------------------------
require('app-module-path').addPath(`${__dirname}/../node_modules`)
// ----------------------------------------------------------------------------

// import a bunch of things we want to make available
const build = require('./domain/builder')
const strings = require('./utils/string-utils')
const print = require('./utils/print')
const printCommands = require('./cli/print-commands')

// export our API
module.exports = {
  build,
  print,
  strings,
  printCommands
}
