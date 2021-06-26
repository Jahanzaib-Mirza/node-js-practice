const fs = require("fs");

const bio = {
    name : "Jahanzaib",
    age: 19,
    address : "Karachi"
};

const jsonData = JSON.stringify(bio);
// fs.writeFile("bio.json",jsonData, (res)=>{
//     console.log("data added");
// });
fs.readFile("bio.json","utf-8",(res,data)=>{
    console.log(data)
    console.log(JSON.parse(data))
})
