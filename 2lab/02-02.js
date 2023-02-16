const http = require("http");
const fs = require("fs");

const port = 5000;

const server = http.createServer((req, res) => {
  fs.readFile("./robert.jpg", (err, data) => {
    res.setHeader("Content-Type", "image/jpeg");
    res.writeHead(200);
    res.end(data);
  })
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});