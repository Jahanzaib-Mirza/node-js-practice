const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {

    // =>Reading data through .readFile<=

    fs.readFile("input.txt",(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    })
    const rStream = fs.createReadStream("input.txt");

    // =>Reading data through stream<=

    rStream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    rStream.on("end", () => {
        res.end();
    });
    rStream.on("error",(err)=>{
        console.log(err);
        res.end(err.toString());
    })

    // =>Reading data through stream.pipe()<=

    rStream.pipe(res)

});

server.listen(9000, "127.0.0.1", () => {
    console.log("listening on port 9000")
});