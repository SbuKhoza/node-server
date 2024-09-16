const http = require('http');
const port = 4000;

const server = http.createServer(function (req, res) {
  // Set the response header to handle plain text response
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/' && req.method === 'GET') {
    // Root Main page
    res.statusCode = 200;
    res.end('Welcome to the Node.js server!');
  } else if (req.url === '/about' && req.method === 'GET') {
    // About Page
    res.statusCode = 200;
    res.end('This is the About page!');
  } else if (req.url === '/data' && req.method === 'POST') {

    // Handle POST request
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.statusCode = 200;
      res.end(`Data received: ${body}`);
    });
  } else {
    // This is for Handling invalid routes and pages
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Start the server
server.listen(port, function (error) {
  if (error) {
    console.log('Something went wrong, Kune Smoko!', error);
  } else {
    console.log('Server is listening on port', port);
  }
});
