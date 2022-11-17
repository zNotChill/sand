const { __time, __duration, __convertTime, __timeStr } = require("fancy-time");
const { __run } = require("./lib/runner/run");
const path = require("path");

__run("Webserver", { file: path.join(__dirname + "/lib/base/webserver.js"), req: "startWebserver" })
