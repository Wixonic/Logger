/**
 * @typedef {object} Logger
 * @property {(any: ...string) => void} debug
 * @property {(any: ...string) => void} info
 * @property {(any: ...string) => void} error
 * @property {(any: ...string) => void} warn
 */

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
 * @param  {...string} any
 * @returns {string}
 */
const rawLog = (level, color, ...any) => {
	const now = new Date();
	console.log(`${color}${level}${colors.reset} ${colors.dim + colors.white}${now.toLocaleDateString("fr", { day: "2-digit", month: "2-digit", year: "numeric" })} ${now.toLocaleTimeString("en", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 })}${colors.reset} ${color}${[...any].join(" ")}${colors.reset}`);
};

/**
 * @type {Logger}
 */
const log = {
	debug: (...any) => rawLog("[DEBUG]", colors.debug, ...any),
	error: (...any) => rawLog("[ERROR]", colors.error, ...any),
	info: (...any) => rawLog(" [INFO]", colors.info, ...any),
	warn: (...any) => rawLog(" [WARN]", colors.warn, ...any)
};

module.exports = {
	colors,
	log,
	rawLog
};