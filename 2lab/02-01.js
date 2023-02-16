const http = require("http");
const fs = require("fs");

const port = 5000;

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(data);
  })
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});