const { __time, __duration, __convertTime, __timeStr } = require("fancy-time");
const { config, __basepath } = require("../../config");

const http = require("http");
const express = require("express");
const path = require("path");

const PORT = config.webserver.PORT;
let app = "", server = "";

function startRoutes() {
	app.use(express.static(path.join(__basepath + "/web")))
}

function startWebserver() {
	console.log(__timeStr(`Starting webserver on PORT ${PORT}`));
	console.log(__timeStr(`Initializing webserver`));
	app = express();
	server = http.createServer(app);
	console.log(__timeStr(`Initialized webserver`));
	console.log(__timeStr(`Starting webserver routes`));
	startRoutes()
	server.listen(PORT, () => {	
		console.log(__timeStr(`Started webserver on PORT ${PORT}`));
	})
}

startWebserver()

module.exports = {
	startWebserver
}