const http = require("http");
const url = require("url");
const fs = require("fs");

const data = fs.readFileSync(`${__dirname}/userApi/user.json`, "utf-8");
const userData = JSON.parse(data);

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("about created")
    }
    else if (req.url === "/contact") {
        res.end("contact created")
    }
    else if (req.url == "/api/user") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(userData));
        res.end();
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" })
        res.end("<h1>404 error. Page Not Found</h1>")

    }
});

server.listen(9000, "127.0.0.1", () => {
    console.log("listening at port no. 9000")
});