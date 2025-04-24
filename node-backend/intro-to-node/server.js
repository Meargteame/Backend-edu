// server.js

// Import the built-in HTTP module using ESM
import http from "http";

// Define port number
const PORT = 3000;

// Create the server
const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js with ECMAScript Modules!");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
