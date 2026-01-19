const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    let path = "./";
    console.log(req.url);
    switch (req.url) {
        case "/":
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about":
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/contact-me":
            path += "contact-me.html";
            res.statusCode = 200;
            break;
        default:
            path += "/404.html";
            res.statusCode = 404;
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log("error " + err);
        } else {
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();
        }
    });
});
server.listen(4000, "localhost", () => {
    console.log("listening in http://localhost:4000");
});
