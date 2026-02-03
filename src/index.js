// src/index.js

const express = require('express');
const app = express();
const PORT = 3000;

// =======================================================
// MIDDLEWARE: The JSON Body Parser
// This line tells Express to use the express.json() middleware for all incoming requests.
// It MUST come before you define your routes that need to use the request body.
app.use(express.json());
// =======================================================

// --- Your Routes Go Here ---
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// A new POST route to test our middleware
app.post('/api/v1/test', (req, res) => {
  // Thanks to the middleware, req.body is now a usable JavaScript object!
  console.log('Request Body Received:', req.body);
  
  res.status(200).json({
    message: 'Data received successfully!',
    yourData: req.body
  });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});