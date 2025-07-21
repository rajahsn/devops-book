const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.send('fundamentals of DevOps');
  res.end('Hello, Raja !\n');
});

const port = process.env.PORT || 8080;
server.listen(port,() => {
  console.log(`Listening on port ${port}`);
});

