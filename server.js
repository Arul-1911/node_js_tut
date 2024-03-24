const http = require("http");
const PORT = 4000;
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", (err,data) => {
    if (err) {
      res.writeHead(404);
      res.write("page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server Running on ${PORT}`);
  }
});
