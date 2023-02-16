import http from "http";

http.createServer(function(request, response){
  let data = ''

  request.on('data', (chunk) => {
    data += chunk
  })

  request.on('end', () => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.write(`метод запроса: ${request.method}\n`);
    response.write(`url: ${request.url}\n`);
    response.write(`версия http: ${request.httpVersion}\n`);
    response.write(`заголовки: ${JSON.stringify(request.headers)}\n`);
    response.write(`тело: ${data}\n`);
    response.end();
  })
}).listen(3000);