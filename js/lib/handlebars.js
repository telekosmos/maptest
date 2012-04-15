var Handlebars = require("lib/handlebars/base");
module.exports = Handlebars;

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)
require("lib/handlebars/utils");

require("lib/handlebars/compiler");
require("lib/handlebars/runtime");

// BEGIN(BROWSER)

// END(BROWSER)

