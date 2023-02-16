const http = require("http");
const fs = require("fs");

const port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === '/api/name') {
    res.setHeader("Content-Type", "text/plain; charset=utf8");
    res.writeHead(200);
    return res.end('Рудьман Егор Эдуардович');
  }

  res.writeHead(404);
  res.end();
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});