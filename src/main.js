const process = require("process");

const colors = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",

	black: "\x1b[30m",
	red: "\x1b[31m",
	green: "\x1b[32m",
	yellow: "\x1b[33m",
	blue: "\x1b[34m",
	magenta: "\x1b[35m",
	cyan: "\x1b[36m",
	white: "\x1b[37m",

	get debug() {
		return this.dim + this.white;
	},
	get error() {
		return this.red;
	},
	get info() {
		return this.cyan;
	},
	get warn() {
		return this.yellow;
	},

	regexp: /\x1b\[\d+(;\d+)*m/g
};

/**
 * @param {string} level
 * @param {string} color
 * @param {Record<string, boolean>} options
 * @param {...string} any
 */
const rawLog = (level, color, options, ...any) => {
	const log = [];

	if (options.displayLevel) log.push(color + level + colors.reset);

	if (options.displayDate) {
		const now = new Date();
		log.push(colors.dim + colors.white +
			now.toLocaleDateString("fr", { day: "2-digit", month: "2-digit", year: "numeric" }),
			now.toLocaleTimeString("en", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 }) + colors.reset);
	}

	log.push(color + [...any].join(" ") + colors.reset);

	process.stdout.write(log.join(" ") + "\n");
};

/**
 * @type {Logger}
 */
const log = {
	debug: (...any) => rawLog("[DEBUG]", colors.debug, log, ...any),
	error: (...any) => rawLog("[ERROR]", colors.error, log, ...any),
	info: (...any) => rawLog(" [INFO]", colors.info, log, ...any),
	warn: (...any) => rawLog(" [WARN]", colors.warn, log, ...any),
	displayDate: true,
	displayLevel: true
};

module.exports = {
	colors,
	log,
	rawLog
};