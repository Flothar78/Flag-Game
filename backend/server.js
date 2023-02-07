const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;



const server = http.createServer((response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "image");
  response.end(image_url);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
