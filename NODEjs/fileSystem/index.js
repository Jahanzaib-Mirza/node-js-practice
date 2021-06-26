const fs = require("fs");
// const { rmdir } = require("node:fs");
// fs.writeFileSync('zebi.txt', "this is jaahnzaib's file");
// fs.writeFileSync('zebi.txt', 'im 19 years old');
// fs.appendFileSync('jahanzaib.txt', 'i\'m a full stack developer');
// var file = fs.readFileSync('zebi.txt');
// console.log(file.toString());
// fs.renameSync('zebi,txt', 'jahanzaib.txt');
// fs.renameSync("jahanzaib,txt","jahanzaib.txt");
// fs.mkdirSync("challange");

// fs.writeFileSync("challange/bio.txt","Name:Jahanzaib");
// fs.appendFileSync("challange/bio.txt","Age:19");

const file = fs.readFileSync("jahanzaib.txt", "utf8");
console.log(file);

// fs.renameSync("challange/bio.txt","challange/me.txt");

// fs.unlinkSync("jahanzaib.txt");
// fs.rmdirSync("challange");
// fs.rmdirSync("challange");