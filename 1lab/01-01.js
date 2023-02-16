import http from "http";

http.createServer(function(request, response){
  response.setHeader("Content-Type", "text/html");
  response.write("<h1>hello world</h1>");
  response.end();
}).listen(3000);