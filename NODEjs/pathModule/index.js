const path = require("path");
// console.log(path.dirname("/home/mjahanzaib/Jahanzaib/nodeJS/pathModule/index.js"));
// console.log(path.extname("/home/mjahanzaib/Jahanzaib/nodeJS/pathModule/index.js"));
// console.log(path.basename("/home/mjahanzaib/Jahanzaib/nodeJS/pathModule/index.js"));
const file = path.parse("/home/mjahanzaib/Jahanzaib/nodeJS/pathModule/index.js");
console.log(file.name);