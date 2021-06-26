const os = require("os");
console.log(os.tmpdir());
var memory = os.totalmem();
console.log(memory/1024/1024/1024);