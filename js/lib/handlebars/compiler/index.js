// Each of these module will augment the Handlebars object as it loads. No need to perform addition operations
module.exports = require("base.js");
require("visitor.js");
require("printer.js");

require("ast.js");
require("compiler.js");
