
const path = require("path");

const __basepath = __dirname;

const config = {
	"webserver": {
		"PORT": 9191,
		"BASE_PATH": __basepath,
	}
}

module.exports = {
	config,
	__basepath
}