const { __timeStr } = require("fancy-time");

const __run = function(task, required) {
	console.log(__timeStr(`Running "${task}" task`));
	try {
		require(required['file'])
	} catch (error) {
		console.log(__timeStr(`Error whilst running "${task}" task`));
	}
}

module.exports = {
	__run
}