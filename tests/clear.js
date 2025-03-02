const { log } = require("../src/main.js");

log.displayDate = false;
log.displayLevel = false;

log.debug("Debug");
log.error("Error");
log.info("Info");
log.warn("Warn");