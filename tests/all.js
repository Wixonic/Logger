const fs = require("fs");
const path = require("path");

for (const file of fs.readdirSync(path.join(__dirname), "utf-8")) {
	if (file.endsWith(".js") && file != "all.js") {
		console.log("Running", file);
		require(path.join(__dirname, file));
		delete require.cache[path.join(__dirname, "..", "src", "main.js")];
	}
}