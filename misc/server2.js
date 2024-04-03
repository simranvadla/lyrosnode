import http from "http";
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World!");
});
server.listen(8080, () => {
  console.log("Server Started on port 8080");
});


