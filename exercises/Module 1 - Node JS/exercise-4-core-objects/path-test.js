var path = require("path");
console.log("directory: " + __dirname);
console.log("file path: " + __filename);
console.log(`file name: ${path.basename(__filename)}`);