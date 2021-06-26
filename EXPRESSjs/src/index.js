const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const request = require('request');
const port = 9000;
const APIkey = '7cdb55f6eb1689e80726b8a97808cec5';

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
console.log(templatePath);
console.log(partialsPath);

app.set("view engine", "hbs");
app.set("views", templatePath);
// app.use(express.static(staticPath))
hbs.registerPartials(partialsPath);
app.get("/",(req,res)=>{
    res.render("index",{
        user: "Jahanzaib",
    })
});
//https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=7cdb55f6eb1689e80726b8a97808cec5
// api.openweathermap.org/data/2.5/weather?q={cityName}&appid={APIkey}

app.get("/about",(req,res)=>{
    var cityName = req.query.city;
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`
    )
    .on("data",(chunk)=>{
        const dd = JSON.parse(chunk);
        res.write(dd.name);
    })
    .on("end",()=>{
        console.log("data delivered");
        res.send();
    })
    // res.render("about",{
    //     name : req.query.name
    // })
});

app.get("*",(req,res)=>{
    res.send("<h1>404 page not found</h1>")
});
app.listen(port,()=>{
    console.log("lidtening at port 9000")
});