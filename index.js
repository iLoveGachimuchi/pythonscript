var exports = require("./js/pythonscript.main.js");
var pythonscript_configuration = exports.pythonscript_configuration;
var pythonscript_controller = exports.pythonscript_controller;

const __RUN_MODE__ = exports.__RUN_MODE__;

var pythscr_conf = new pythonscript_configuration();
pythscr_conf.set_runner(0);

var pythscr = new pythonscript_controller(pythscr_conf);
pythscr.run(
`'''bruh'''
#bruh
"""br
u
        h"""
print("hello world")`
)